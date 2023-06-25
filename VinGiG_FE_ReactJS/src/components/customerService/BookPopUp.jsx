import "./popup.css"
import axios from 'axios';
import React, { useState, useEffect } from "react"

export default function BookPopUp(props) {
    const customerSession = JSON.parse(localStorage.getItem("accessToken"));

    const [buildingID, setBuildingID] = useState('')
    const [apartment, setApartment] = useState('')

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
    }

    const [buildings, setBuildings] = useState([]);

    useEffect(() => {
        loadBuildings();
    }, [])

    const loadBuildings = () => {
        axios.get(`http://localhost:8081/vingig/buildings`)
            .then(res => {
                const buildings = res.data;
                setBuildings(buildings);
            })
            .catch(error => console.log(error));
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