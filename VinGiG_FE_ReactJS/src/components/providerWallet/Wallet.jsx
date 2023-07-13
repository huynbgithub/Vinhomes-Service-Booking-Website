import "./style.css"
import axios from 'axios';
import React, { useEffect, useState } from "react"
import { NumericFormat } from "react-number-format"

function CustomerAccount() {

  const providerSession = JSON.parse(localStorage.getItem("accessToken"));
  const [bTrans, setBTrans] = useState([]);
  const [sTrans, setSTrans] = useState([]);
  const [dTrans, setDTrans] = useState([]);
  const [wallet, setWallet] = useState({});

  useEffect(() => {
    getWallet();
    loadBookingFeeTrans();
    loadDepositTrans();
    loadSubscriptionFeeTrans();
  }, [])
  const getWallet = () => {
    axios.get(`http://localhost:8081/vingig/provider/${providerSession.providerID}/wallets`)
      .then(res => {
        const wallets = res.data;
        setWallet(wallets[0]);
      })
      .catch(error => console.log(error));
  }
  const loadBookingFeeTrans = () => {
    axios.get(`http://localhost:8081/vingig/transaction/provider/${providerSession.providerID}/bookingFee/date/{dateMin}/{dateMax}`)
      .then(res => {
        const bTrans = res.data;
        setBTrans(bTrans);
      })
      .catch(error => console.log(error));
  }
  const loadDepositTrans = () => {
    axios.get(`http://localhost:8081/vingig/transaction/provider/${providerSession.providerID}/deposit/date/{dateMin}/{dateMax}`)
      .then(res => {
        const dTrans = res.data;
        setDTrans(dTrans);
      })
      .catch(error => console.log(error));
  }
  const loadSubscriptionFeeTrans = () => {
    axios.get(`http://localhost:8081/vingig/transaction/provider/${providerSession.providerID}/subscriptionFee/date/{dateMin}/{dateMax}`)
      .then(res => {
        const sTrans = res.data;
        setSTrans(sTrans);
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
      <div className='container d_flex'>
        <div className="col-a">
          <h4 className="m-b">Deposit History</h4>
          <table className="fl-table">
            <thead>
              <tr>
                <th>Ngày</th>
                <th>Số tiền</th>
              </tr>
            </thead>
            <tbody>
              {dTrans.map((dTran) => {
                const epochTime = dTran.date;

                const dateObj = new Date(epochTime);

                const date = dateObj.getDate();
                const month = dateObj.getMonth() + 1;
                const year = dateObj.getYear() - 100 + 2000;

                const formattedTime =
                  date.toString() + '/' +
                  month.toString() + '/' +
                  year.toString();
                return (
                  <tr key={dTran.transactionID}>
                    <td>{formattedTime}</td>
                    <td><NumericFormat value={dTran.amount} displayType="text" thousandSeparator={true} suffix={' VND'} /></td>
                  </tr>)
              })}
            </tbody>
          </table>
        </div>
        <div className="col-a">
          <h4 className="m-b">Subscription Fee History</h4>
          <table className="fl-table">
            <thead>
              <tr>
                <th>Ngày</th>
                <th>Số tiền</th>
              </tr>
            </thead>
            <tbody>
              {sTrans.map((sTran) => {
                const epochTime = sTran.date;

                const dateObj = new Date(epochTime);

                const date = dateObj.getDate();
                const month = dateObj.getMonth() + 1;
                const year = dateObj.getYear() - 100 + 2000;

                const formattedTime =
                  date.toString() + '/' +
                  month.toString() + '/' +
                  year.toString();
                return (
                  <tr key={sTran.transactionID}>
                    <td>{formattedTime}</td>
                    <td><NumericFormat value={sTran.amount} displayType="text" thousandSeparator={true} suffix={' VND'} /></td>
                  </tr>)
              })}
            </tbody>
          </table>
        </div>
        <div className="col-a">
          <h4 className="m-b">Booking Fee History</h4>
          <table className="fl-table">
            <thead>
              <tr>
                <th>Ngày</th>
                <th>Số tiền</th>
              </tr>
            </thead>
            <tbody>
              {bTrans.map((bTran) => {
                const epochTime = bTran.date;

                const dateObj = new Date(epochTime);

                const date = dateObj.getDate();
                const month = dateObj.getMonth() + 1;
                const year = dateObj.getYear() - 100 + 2000;

                const formattedTime =
                  date.toString() + '/' +
                  month.toString() + '/' +
                  year.toString();
                return (
                  <tr key={bTran.transactionID}>
                    <td>{formattedTime}</td>
                    <td><NumericFormat value={bTran.amount} displayType="text" thousandSeparator={true} suffix={' VND'} /></td>
                  </tr>)
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section >
  )
}

export default CustomerAccount