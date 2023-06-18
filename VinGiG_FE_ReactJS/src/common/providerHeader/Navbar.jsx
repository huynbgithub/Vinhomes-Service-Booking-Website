import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  // const [seen, setSeen] = useState(false)

  // function togglePop() {
  //   setSeen(!seen);
  // };
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='categories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Services <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/provider'>Home</Link>
              </li>
              <li>
                <Link to='/provider/wallet'>Wallet</Link>
              </li>
              <li>
                <Link to='/provider/history'>Booking History</Link>
              </li>
              {/* <li>
                <Link to='/provider/wallet'>Wallet</Link>
              </li> */}
              <li>
                <Link to='/logout'>Logout</Link>
                {/* <div>
                  <a onClick={togglePop}>Login</a>
                  {seen ? <Login toggle={togglePop} /> : null}
                </div> */}
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
