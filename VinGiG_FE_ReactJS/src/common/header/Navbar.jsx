import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useOnHoverOutside } from "../../hooks/useOnHoverOutside";
import logo from "../../components/assets/images/VinGiG_logo.png"

function Navbar() {

  return (
    <>
      <header className='header header-edit'>
        <div className='container d_flex'>
          {/* <div className='catgrories d_flex'>
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
            <ul className="link f_flex capitalize" >
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/account/1'>Account</Link>
              </li>
              <li>
                <Link to='/history'>Booking History</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
            </ul>
          </div>
        </div>

      </header >
    </>
  );
}

export default Navbar;
