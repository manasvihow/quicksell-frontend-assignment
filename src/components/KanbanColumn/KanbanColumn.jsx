import React from 'react';
import Card from '../Card/Card';
import { PRIORITY_MAP, STATUS_MAP, USER_MAP, AVAILABILITY_MAP } from '../../constants/index.jsx';
import './KanbanColumn.css';
import menu from '/src/assets/Untitled/icons_FEtask/menu.svg';
import add from '/src/assets/Untitled/icons_FEtask/add.svg';

const KanbanColumn = ({ title, tickets, grouping, users }) => {
  return (
    <div className="kanban-column">
      <div className="column-header">
        <div className="header-left">
          {grouping === 'priority' && PRIORITY_MAP[Object.keys(PRIORITY_MAP).find(
            key => PRIORITY_MAP[key].label === title
          )]?.icon}
          {grouping === 'status' && STATUS_MAP[Object.keys(STATUS_MAP).find(
            key => STATUS_MAP[key].label === title
          )]?.icon}
          {grouping === 'user' && (
            <div className="user-group-header">
              {(() => {
                const user = users.find(user => user.name === title);
                return (
                  <div className='user-header-icons'>
                    <div>{USER_MAP[user?.id]?.icon}</div>
                    <div className='avail'>{AVAILABILITY_MAP[user?.available]?.icon}</div>
                  </div>
                );
              })()}
            </div>
          )}
          <div className='header-left-content'>
            <h3 className="column-title">{title}</h3>
            <span className="ticket-count">{tickets.length}</span>
          </div>
        </div>
        <div className="buttons">
          <button className="column-menu-button">
            <img src={add} alt="Add" />
          </button>
          <button className="column-menu-button">
            <img src={menu} alt="Menu" />
          </button>
        </div>
      </div>

      <div className="tickets-container">
        {tickets.map(ticket => (
          <Card
            key={ticket.id}
            ticket={ticket}
            user={users.find(user => user.id === ticket.userId)}
            grouping={grouping}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
