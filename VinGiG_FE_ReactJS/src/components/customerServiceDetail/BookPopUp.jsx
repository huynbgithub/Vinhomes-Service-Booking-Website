// import "./popup.css"
import axios from 'axios';
import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import {over} from 'stompjs';
import SockJS from 'sockjs-client';

var stompClient =null;
export default function BookPopUp(props) {
    const customerSession = JSON.parse(localStorage.getItem("accessToken"));

    const [buildingID, setBuildingID] = useState('')
    const [apartment, setApartment] = useState('')
    const history = useHistory();

    async function handleBook(e) {
        e.preventDefault()
        // Code to handle add
        await axios.post(`http://localhost:8081/vingig/building/${buildingID}/customer/${customerSession.customerID}/providerService/${props.proServiceID}/booking`,
            {
                status: 0,
                apartment: apartment,
                unitPrice: props.unitPrice
            })
            .catch(error => console.log(error));
        props.togglePopBook();
        if (stompClient) {
            var booking = {
                proServiceID: props.proServiceID,
                status: 0,
                apartment: apartment,
                unitPrice: props.unitPrice,    
                customerID:  customerSession.customerID,
                buildingID: buildingID,
            };
            console.log(booking);
            stompClient.send("/app/booking/place", {}, JSON.stringify(booking));
        }
        history.push('/customer/activity');
    }

    const [buildings, setBuildings] = useState([]);

    useEffect(() => {
        loadBuildings();
        connect();
    }, [])

    const loadBuildings = () => {
        axios.get(`http://localhost:8081/vingig/buildings`)
            .then(res => {
                const buildings = res.data;
                setBuildings(buildings);
            })
            .catch(error => console.log(error));
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
                <h2>Location Detail:</h2>
                <br />
                <form onSubmit={handleBook}>
                    <label>
                        Building:
                        <select required onChange={e => setBuildingID(e.target.value)}>
                            <option value=""></option>
                            {buildings.map((building) => (
                                <option value={building.buildingID}>{building.buildingName}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Apartment:
                        <input required type="number" value={apartment} onChange={e => setApartment(e.target.value)} />
                    </label>
                    <div className="d_flex_add">
                        <button className="d_flex_add" type="submit">Book</button>
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