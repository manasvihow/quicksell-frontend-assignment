import React from 'react';
import LowPriority from '../assets/Untitled/icons_FEtask/LowPriority.svg';
import MediumPriority from '../assets/Untitled/icons_FEtask/MediumPriority.svg';
import NoPriority from '../assets/Untitled/icons_FEtask/NoPriority.svg';
import HighPriority from '../assets/Untitled/icons_FEtask/Urgent_Gray.svg';
import UrgentPriority from '../assets/Untitled/icons_FEtask/Urgent_Color.svg';
import ToDo from '../assets/Untitled/icons_FEtask/ToDo.svg';
import InProgress from '../assets/Untitled/icons_FEtask/InProgress.svg';
import Backlog from '../assets/Untitled/icons_FEtask/Backlog.svg';
import Cancelled from '../assets/Untitled/icons_FEtask/Cancelled.svg';
import Done from '../assets/Untitled/icons_FEtask/Done.svg';
import { CircleIcon } from 'lucide-react';

const iconStyle = { width: 16, height: 16 };
const userIconStyle = { width: 25, height: 25, zIndex: 1 };
const availableIconStyle = { width: 10, height: 10, color: "#E4B811", backgroundColor :"#E4B811", borderRadius: "50%" };
const notAvailableIconStyle = { width: 10, height: 10, color: "#E5E0E7", backgroundColor :"#E5E0E7", borderRadius: "50%" };

export const PRIORITY_MAP = {
  4: { 
    label: "Urgent", 
    icon: <img src={UrgentPriority} style={iconStyle} alt="Low Priority Icon" className="priority-icon priority-low" />
  },
  3: { 
    label: "High", 
    icon: <img src={HighPriority} style={iconStyle} alt="Low Priority Icon" className="priority-icon priority-low" />
  },
  2: { 
    label: "Medium", 
    icon: <img src={MediumPriority} style={iconStyle} alt="Low Priority Icon" className="priority-icon priority-low" />
  },
  1: { 
    label: "Low", 
    icon: <img src={LowPriority} style={iconStyle} alt="Low Priority Icon" className="priority-icon priority-low" />
  },
  0: { 
    label: "No Priority", 
    icon: <img src={NoPriority} style={iconStyle} alt="Low Priority Icon" className="priority-icon priority-low" />
  }
};
export const STATUS_MAP = {
  "Todo": { 
    label: "Todo", 
    icon: <img src={ToDo} style={iconStyle}  />
  },
  "In progress": { 
    label: "In progress", 
    icon: <img src={InProgress} style={iconStyle}    />
  },
  "Backlog": { 
    label: "Backlog", 
    icon: <img src={Backlog} style={iconStyle}  />
  },
  "Done": { 
    label: "Done", 
    icon: <img src={Done} style={iconStyle}  />
  },
  "Cancelled": { 
    label: "Cancelled", 
    icon: <img src={Cancelled} style={iconStyle}    />
  }
}

export const USER_MAP = {
  "usr-1": { 
    label: "Anoop sharma", 
    icon: <img src="https://www.shareicon.net/data/512x512/2016/05/24/770139_man_512x512.png" style={userIconStyle}  />
  },
  "usr-2": { 
    label: "Yogesh", 
    icon: <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" style={userIconStyle}    />
  },
  "usr-3": { 
    label: "Shankar Kumar", 
    icon: <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_user_people_person_avatar_black_tone_icon_159361.png" style={userIconStyle}   />
  },
  "usr-4": { 
    label: "Ramesh", 
    icon: <img src="https://cdn.icon-icons.com/icons2/3708/PNG/512/girl_female_woman_person_people_avatar_icon_230018.png" style={userIconStyle}   />
  },
  "usr-5": { 
    label: "Suresh", 
    icon: <img src="https://w7.pngwing.com/pngs/152/155/png-transparent-male-man-person-business-avatar-icon.png" style={userIconStyle}     />
  }
}
export const AVAILABILITY_MAP = {
  "false": {  
    icon: <CircleIcon style={notAvailableIconStyle} />
  },
  "true": {  
    icon: <CircleIcon style={availableIconStyle}  />
  },
}
