import React, { useEffect, useState } from "react"
import axios from 'axios';
import EditPopUp from "./EditPopUp"

function CustomerAccount() {

  const customerSession = JSON.parse(localStorage.getItem("accessToken"));
  const [customer, setCustomer] = useState({})
  const [seenEdit, setSeenEdit] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  function togglePopEdit() {
    setSeenEdit(!seenEdit);
  };

  useEffect(() => {
    getCustomer();
  }, []);

  function getCustomer() {
    axios.get(`http://localhost:8081/vingig/customer/${customerSession.customerID}`)
      .then(res => {
        const customer = res.data;
        setCustomer(customer);
      }).catch(error => console.log(error));
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <section className='cart-items account-height containerHeight' >
      <div className='container d_flex'>
        <h1>Account Management</h1>

        <div className='account_info product'>
          <h2>Avatar</h2>
          <div className='img-a d_flex'>
            <img src={customer.avatar} alt="" />
          </div>
        </div>
        <div className='account_info product'>
          <h2>Account Information</h2>
          <div className=' d_flex'>
            <h4>Name:</h4>
            {customer.fullName}
          </div>
          <div className=' d_flex'>
            <h4>Email:&nbsp;&nbsp;&nbsp;</h4>
            {customer.email}
          </div>
          <div className=' d_flex'>
            <h4>Phone:</h4>
            {customer.phone}
          </div>
          <div className=' d_flex'>
            <h4>Gender:</h4>
            {customer.gender ? "Nam" : "Nữ"}
          </div>
          <div className=' d_flex'>
            <h4>Building:</h4>
            {customer.buildingName}
          </div>
          <div className=' d_flex'>
            <h4>Address:</h4>
            {customer.address}
          </div>
          <br />
          <div className=' d_flex'>
            <h5>Do you want to edit?</h5>
            <button className='btn-primary' onClick={() => { togglePopEdit(); }}>Edit</button>
          </div>
          {seenEdit ? <EditPopUp togglePopEdit={togglePopEdit} customerID={customer.customerID} /> : null}
        </div>
        <div className='account_info product'>
          <h2>Username & Password</h2>
          <div className=' d_flex'>
            <h4>Username:</h4>
            {customerSession.username}
          </div>
          <div className=' d_flex mg-top'>
            <h4>Password:</h4>
            {showPassword ? (
              <span>{customerSession.password}</span>
            ) : (
              <span>••••••••</span>
            )}
            <button className="btn-hide" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <br />
          <div className=' d_flex'>
            <h5>Change password?</h5>
            <button className='btn-primary'>Change</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerAccount