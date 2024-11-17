import React from 'react';
import { AVAILABILITY_MAP, PRIORITY_MAP, USER_MAP } from '../../constants/index.jsx';
import './Card.css';


const Card = ({ ticket, user, grouping }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        {grouping != 'user' && <div className='user'>
          <div className='user-icon'>{USER_MAP[ticket.userId].icon}</div>
          <div className='user-available'>{AVAILABILITY_MAP[user.available].icon}</div>
        </div>}
      </div>
      <h4 className="ticket-title">{ticket.title}</h4>
      <div className="ticket-footer">
        {grouping != 'priority' && <div className='priority_icon'>{PRIORITY_MAP[ticket.priority].icon}</div>}
        <div className="ticket-tag">
          <div className='bullet'></div>
          {ticket.tag}
        </div>
      </div>
    </div>
  );
};

export default Card;