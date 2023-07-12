import "./style.css"
import axios from 'axios';
import React, { useEffect, useState } from "react"
import { NumericFormat } from "react-number-format"

function CustomerAccount() {

  const providerSession = JSON.parse(localStorage.getItem("accessToken"));
  const [wallet, setWallet] = useState({});

  useEffect(() => {
    getWallet();
  }, [])
  const getWallet = () => {
    axios.get(`http://localhost:8081/vingig/provider/${providerSession.providerID}/wallets`)
      .then(res => {
        const wallets = res.data;
        setWallet(wallets[0]);
      })
      .catch(error => console.log(error));
  }
  return (
    <section className='cart-items account-height' >
      <div className='container d_flex'>
        <h1>Wallet Management</h1>

        <div className='account_info product'>
          <h2>Wallet Information</h2>
          <div className=' d_flex'>
            <h4>Total:</h4>
            <h4>
              <NumericFormat value={wallet.balance} displayType="text" thousandSeparator={true} suffix={' VND'} />
            </h4>
          </div>
          <br />
          <div className=' d_flex'>
            <h5>Do you want to deposit?</h5>
            <button className='btn-primary'>Deposit</button>
          </div>
        </div>
        <div className='account_info product'>
          {/* <h2>Username & Password</h2>
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
          </div> */}

        </div>
      </div>
    </section>
  )
}

export default CustomerAccount