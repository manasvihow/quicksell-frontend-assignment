import React from 'react'
import './DisplayMenu.css'
import { useState } from 'react'
import DisplayMenuSVG from '/src/assets/Untitled/icons_FEtask/DisplayMenuSVG.svg'
import down from '/src/assets/Untitled/icons_FEtask/down.svg'


const DisplayMenu = ({grouping, ordering, onGroupingChange, onOrderingChange}) => {


  const [showMenu, setShowMenu] = useState(false);


  return (
    <div className='nav'>
       <button onClick={() => {
        if(showMenu) setShowMenu(false);
        else setShowMenu(true);
       }} className="display-button">
        <img src={DisplayMenuSVG} />
        <span>Display</span>
        <img src={down} />
      </button>

      {showMenu && (
        <div className='menu-dropdown'>
        <div className='dropdown-group'>
          <label className='dropdown-label'>Grouping</label>
          <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)} className='dropdown-select'>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
          
        </div>
        <div className='dropdown-group'>
          <label className='dropdown-label'>Ordering</label>
          <select value={ordering} onChange={(e) => onOrderingChange(e.target.value)} className='dropdown-select'>
            <option value="title">Title</option>
            <option value="priority">Priority</option>
          </select>
          
        </div>
      </div>
      )}




    </div>
  )
}

export default DisplayMenu