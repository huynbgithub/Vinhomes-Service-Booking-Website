import React from "react"

function CustomerAccount() {

  const customerSession = JSON.parse(localStorage.getItem("accessToken"));

  return (
    <section className='cart-items account-height containerHeight' >
      <div className='container d_flex'>
        <h1>Account Management</h1>
        {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

        <div className='account_info product'>
          <h2>Avatar</h2>
          <div className='img-a d_flex'>
            <img src={customerSession.avatar} alt="" />
          </div>
        </div>
        <div className='account_info product'>
          <h2>Account Information</h2>
          <div className=' d_flex'>
            <h4>Name:</h4>
            <h4>
              {customerSession.fullName}
            </h4>
          </div>
          <div className=' d_flex'>
            <h4>Email:</h4>
            <h4>
              {customerSession.email}
            </h4>
          </div>
          <div className=' d_flex'>
            <h4>Phone:</h4>
            <h4>
              {customerSession.phone}
            </h4>
          </div>
          <br />
          <div className=' d_flex'>
            <h5>Do you want to edit?</h5>
            <button className='btn-primary'>Edit</button>
          </div>
        </div>
        <div className='account_info product'>
          <h2>Username & Password</h2>
          <div className=' d_flex'>
            <h4>username:</h4>
            <h4>
              {customerSession.username}
            </h4>
          </div>
          <div className=' d_flex'>
            <h4>password:</h4>
            <h4>
              {customerSession.password}
            </h4>
          </div>
          <br />
          <div className=' d_flex'>
            <h5>Change password?</h5>
            <button className='btn-primary'>Change</button>
          </div>

        </div>

        {/* <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>.00</h3>
            </div>
          </div> */}
      </div>
    </section>
  )
}

export default CustomerAccount