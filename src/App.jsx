import React from 'react';
import DisplayMenu from './components/Header/DisplayMenu';
import KanbanColumn from './components/KanbanColumn/KanbanColumn';
import { useData } from './data/kanbanData';
import './App.css'

const App = () => {
  const {
    users,
    grouping,
    ordering,
    loading,
    error,
    setGrouping,
    setOrdering,
    groupedTickets
  } = useData();

  if (loading) return <div className="loading-message">Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="app-container">
      <div className="app-header">
        <DisplayMenu
          grouping={grouping}
          ordering={ordering}
          onGroupingChange={setGrouping}
          onOrderingChange={setOrdering}
        />
      </div>

      <div className="board-container">
        <div className="columns-grid">
          {Object.entries(groupedTickets).map(([group, tickets]) => (
            <KanbanColumn
              key={group}
              title={group}
              tickets={tickets}
              grouping={grouping}
              users={users}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;