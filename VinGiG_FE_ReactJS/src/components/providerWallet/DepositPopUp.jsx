// import "./popup.css"
import axios from 'axios';
import React, { useState, useEffect } from "react"
import {over} from 'stompjs';
import SockJS from 'sockjs-client';

var stompClient =null;
export default function DepositPopUp(props) {
    const providerSession = JSON.parse(localStorage.getItem("accessToken"));

    const [amount, setAmount] = useState('')

    async function handleDeposit(e) {
        e.preventDefault()
        // Code to handle add
        await axios.post(`http://localhost:8081/vingig/provider/${providerSession.providerID}/deposit`,
            {
                amount: amount,
            })
            .catch(error => console.log(error));
        props.togglePopBook();
        if (stompClient) {
            // var booking = {
            //     proServiceID: props.proServiceID,
            //     status: 0,
            //     apartment: apartment,
            //     unitPrice: props.unitPrice,    
            //     customerID:  customerSession.customerID,
            //     buildingID: buildingID,
            // };
            // console.log(booking);
            // stompClient.send("/app/booking/place", {}, JSON.stringify(booking));
        }
    }

    const connect =()=>{
        let Sock = new SockJS('http://localhost:8081/vingig/websocket');
        stompClient = over(Sock);
        stompClient.connect({},onConnected, onError);
    }

    const onConnected = () => {
        let access = JSON.parse(localStorage.getItem("accessToken"));
        let role = access.role;
        let id;
        if(role === "provider") id = access.providerID
        else id = access.customerID;
    }

    const onError = (err) => {
        console.log(err);    
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Deposit Detail:</h2>
                <br />
                <form onSubmit={handleDeposit}>
                    <h5>*Deposit limit: 10,000,000 VND</h5>
                    <label>
                        Amount:
                        <input required type="number" value={amount} onChange={e => setAmount(e.target.value) } />
                    </label>
                    <label>
                        Currency:
                        <input required type="text" value="VND" disabled />
                    </label>
                    <label>
                        Method:
                        <input required type="text" value="VNPay Portal" disabled/>
                    </label>
                    <div className="d_flex_add">
                        <button className="d_flex_add" type="submit">Deposit</button>
                    </div>
                </form>
                <br />
                <div className="d_flex_add">
                    <button className="btn-primary margin-btn" onClick={props.togglePopBook}>Close</button>
                </div>
            </div>
        </div>
    )
}