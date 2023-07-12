import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../components/assets/images/VinGiG_logo.png"

function Navbar() {

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
                <Link to='/provider'>Home</Link>
              </li>
              <li>
                <Link to='/provider/service'>Service</Link>
              </li>
              <li>
                <Link to='/provider/activity'>Current Activity</Link>
              </li>
              <li>
                <Link to='/provider/chat'>Chat</Link>
              </li>
              <li>
                <Link to='/provider/history'>Booking History</Link>
              </li>
              <li>
                <Link to='/provider/wallet'>Wallet</Link>
              </li>
              <li>
                <Link to='/provider/subscription'>Subscription</Link>
              </li>
              <li>
                <Link to='/provider/account'>Account</Link>
              </li>
              <li>
                <Link to='/logout'>Logout</Link>
              </li>
            </ul>
          </div>
        </div>

      </header >
    </>
  );
}

export default Navbar;
