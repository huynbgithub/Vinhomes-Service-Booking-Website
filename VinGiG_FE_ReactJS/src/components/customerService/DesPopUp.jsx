import "./popup.css"
import axios from 'axios';
import React, { useState, useEffect } from "react"

export default function BookPopUp(props) {
    const customerSession = JSON.parse(localStorage.getItem("accessToken"));

    // const [buildingID, setBuildingID] = useState('')
    // const [apartment, setApartment] = useState('')

    // async function handleBook(e) {
    //     e.preventDefault()
    //     // Code to handle add
    //     await axios.post(`http://localhost:8081/vingig/building/18/customer/${customerSession.customerID}/providerService/${props.proServiceID}/booking`,
    //         {
    //             status: 0,
    //             apartment: apartment,
    //             unitPrice: props.unitPrice
    //         })
    //         .catch(error => console.log(error));
    //     props.togglePopBook();
    // }
    const [proService, setProService] = useState('')
    useEffect(() => {
        getService();
    },
        []);
    function getService() {
        axios.get(`http://localhost:8081/vingig/providerService/${props.proServiceID}`)
            .then(res => {
                const service = res.data;
                setProService(service);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Description:</h2>
                <br />
                <form>
                    <label>
                        {/* <h4>Description:</h4> */}
                        <p>{proService.description}</p>
                    </label>
                    {/* <label>
              Building:
              <input required type="text" value={buildingID} onChange={e => setBuildingID(e.target.value)} />
            </label>
            <label>
              Apartment:
              <input required type="number" value={apartment} onChange={e => setApartment(e.target.value)} />
            </label>
            <div className="d_flex_add">
              <button className="d_flex_add" type="submit">Book</button>
            </div> */}
                </form>
                <br />
                <div className="d_flex_add">
                    <button className="btn-primary margin-btn" onClick={props.togglePopDes}>Close</button>
                </div>
            </div>
        </div>
    )
}