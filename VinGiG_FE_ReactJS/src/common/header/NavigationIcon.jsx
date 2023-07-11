import React from "react";
import "./style.css"
import { Link } from 'react-router-dom';

const NavigationIcon = ({ icon, target, notificationCount }) => {
    
    const handleClick = () => {
        // Reset the count to 0 when the icon is clicked
        localStorage.setItem("activityCount", 0);
      };

  return (
    <li>
        <div className="navigation-icon">
            <Link to={`/customer/${target}`} onClick={handleClick}>{icon}</Link>
            {notificationCount > 0 && (
            <span className="notification-badge">{notificationCount}</span>
            )}
        </div>
    </li>
    );
    
    
};

export default NavigationIcon;