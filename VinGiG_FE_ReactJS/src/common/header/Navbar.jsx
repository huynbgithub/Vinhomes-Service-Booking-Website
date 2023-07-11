import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../components/assets/images/VinGiG_logo.png"
import NavigationIcon from "./NavigationIcon"

function Navbar() {
  // const activityCount = parseInt(localStorage.getItem("activityCount"));
  // const chatCount = JSON.parse(localStorage.getItem("chatCount"));

  return (
    <>
      <header className='header header-edit'>
        <div className='container d_flex'>
          {/* <div className='categories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Services
              <i className='fa fa-chevron-down'></i>
            </h4>
          </div> */}
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>

          <div className='navlink'>
            <ul className="f_flex" >
              <li>
                <Link to='/'>Home</Link>
              </li>

              {localStorage.getItem("accessToken") && JSON.parse(localStorage.getItem("accessToken")).role == 'customer' ? (
                <>
                  {/* <NavigationIcon icon="Current Activity" target="activity" notificationCount={activityCount} />

                  <NavigationIcon icon="Chat" target="chat" notificationCount={Array.from(chatCount).length} /> */}
                  <li>
                    <Link to='/customer/activity'>Current Activity</Link>
                  </li>
                  <li>
                    <Link to='/customer/chat'>Chat</Link>
                  </li>
                  <li>
                    <Link to='/customer/history'>Booking History</Link>
                  </li>
                  <li>
                    <Link to='/customer/account'>Account</Link>
                  </li>
                  <li>
                    <Link to='/logout'>Logout</Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to='/login'>Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>

      </header >
    </>
  );
}

export default Navbar;
