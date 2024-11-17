import { useState, useEffect } from 'react';
import { PRIORITY_MAP } from '../constants/index.jsx';

export const useData = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'priority');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
        setError(null);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('ordering', ordering);
  }, [grouping, ordering]);

  const groupTickets = () => {
    let grouped = {};
    
    if (grouping === 'status') {
      tickets.forEach(ticket => {
        if (!grouped[ticket.status]) {
          grouped[ticket.status] = [];
        }
        grouped[ticket.status].push(ticket);
      });
    } else if (grouping === 'user') {
      users.forEach(user => {
        grouped[user.name] = tickets.filter(ticket => ticket.userId === user.id);
      });
    }else if (grouping === 'priority') {
      // Sort priorities in descending order for grouping
      const priorities = Object.keys(PRIORITY_MAP).sort((a, b) => b - a);
      priorities.forEach(priority => {
        grouped[PRIORITY_MAP[priority].label] = tickets.filter(
          ticket => ticket.priority === parseInt(priority)
        );
      });
    }

    // Sort tickets within each group
    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => {
        if (ordering === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });
    return grouped;
  };

  return {
    tickets,
    users,
    grouping,
    ordering,
    loading,
    error,
    setGrouping,
    setOrdering,
    groupedTickets: groupTickets()
  };
};
