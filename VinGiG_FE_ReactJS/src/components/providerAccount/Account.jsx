import React, { useEffect, useState } from "react"
import axios from 'axios';
import EditPopUp from "./EditPopUp"
import "./style.css"

function ProviderAccount() {

  const providerSession = JSON.parse(localStorage.getItem("accessToken"));
  const [provider, setProvider] = useState({})
  const [seenEdit, setSeenEdit] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  function togglePopEdit() {
    setSeenEdit(!seenEdit);
  };

  useEffect(() => {
    getProvider();
  }, []);

  function getProvider() {
    axios.get(`http://localhost:8081/vingig/provider/${providerSession.providerID}`)
      .then(res => {
        const provider = res.data;
        setProvider(provider);
      }).catch(error => console.log(error));
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <section className='cart-items account-height' >
      <div className='container d_flex'>
        <h1>Account Management</h1>
        {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

        <div className='account_info product'>
          <h2>Avatar</h2>
          <div className='img-a d_flex'>
            <img src={provider.avatar} alt="" />
          </div>
        </div>
        <div className='account_info product'>
          <h2>Account Information</h2>
          <div className=' d_flex'>
            <h4>Name:</h4>
            {provider.fullName}
          </div>
          <div className=' d_flex'>
            <h4>Email:</h4>
            {provider.email}
          </div>
          <div className=' d_flex'>
            <h4>Phone:</h4>
            {provider.phone}
          </div>
          <div className=' d_flex'>
            <h4>Gender:</h4>
            {provider.gender ? "Nam" : "Nữ"}
          </div>
          <div className=' d_flex'>
            <h4>Building:</h4>
            {provider.buildingName}
          </div>
          <div className=' d_flex'>
            <h4>Address:</h4>
            {provider.address}
          </div>
          <br />
          <div className=' d_flex'>
            <h5>Do you want to edit?</h5>
            <button className='btn-primary' onClick={() => { togglePopEdit(); }}>Edit</button>
          </div>
          {seenEdit ? <EditPopUp togglePopEdit={togglePopEdit} providerID={provider.providerID} getProvider={getProvider} /> : null}
        </div>
        <div className='account_info product'>
          <h2>Username & Password</h2>
          <div className=' d_flex'>
            <h4>Username:</h4>
            {providerSession.username}
          </div>
          <div className=' d_flex mg-top'>
            <h4>Password:</h4>
            {showPassword ? (
              <span>{providerSession.password}</span>
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

export default ProviderAccount