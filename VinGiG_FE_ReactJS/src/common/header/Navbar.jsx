import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useOnHoverOutside } from "../../hooks/useOnHoverOutside";

function Navbar() {

  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Services
              {/* <i className='fa fa-chevron-down'></i> */}
            </h4>
          </div>
          <div className='navlink'>
            <ul className="link f_flex capitalize" >
              <li>
                <Link to='/'>Home</Link>
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
