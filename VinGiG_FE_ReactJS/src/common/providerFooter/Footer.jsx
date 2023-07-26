import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer className="colorProvider">
        <div className='container grid2'>
          <div className='box'>
            <h1>VinGiG</h1>
            <p>Vinhomes Grand Park On-demand Local Service.</p>
            <div className='icon d_flex'>
              {/* <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div> */}
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Our Founders</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Book </li>
              <li>Track Your Order </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Long Thanh My, Thu Duc City, HCMC, Vietnam </li>
              <li>Email: vivgig@gmail.com</li>
              <li>Phone: +0905123456</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
