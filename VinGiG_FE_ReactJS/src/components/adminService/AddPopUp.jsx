import "./popup.css"
import axios from 'axios';
import React, { useState } from "react"

export default function AddPopUp(props) {

    const [description, setDescription] = useState('')
    const [fee, setFee] = useState('')
    const [priceMax, setPriceMax] = useState('')
    const [priceMin, setPriceMin] = useState('')
    const [serviceName, setServiceName] = useState('')
    const [unit, setUnit] = useState('')
    const [catogoryID, setCatogoryID] = useState('')


    async function handleAdd(e) {
        e.preventDefault()
        // Code to handle add
        await axios.post(`http://localhost:8081/giGService/serviceID`,
            {
                active: true,
                description: description,
                fee: fee,
                priceMax: priceMax,
                priceMin: priceMin,
                serviceName: serviceName,
                unit: unit,
                catogoryID: catogoryID,


            })
            .catch(error => console.log(error));
        props.togglePopAdd();
        props.loadServices();
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Add Service</h2>
                <form onSubmit={handleAdd}>
                    <label>
                        ServiceName:
                        <input required type="text" value={serviceName} onChange={e => setServiceName(e.target.value)} />
                    </label>
                    <label>
                        Description:
                        <input required type="text" value={description} onChange={e => setDescription(e.target.value)} />
                    </label>
                    <label>
                        Fee:
                        <input required type="number" value={fee} onChange={e => setFee(e.target.value)} />
                    </label>
                    <label>
                        PriceMax:
                        <input required type="number" value={priceMax} onChange={e => setPriceMax(e.target.value)} />
                    </label>
                    <label>
                        PriceMin:
                        <input required type="number" value={priceMin} onChange={e => setPriceMin(e.target.value)} />
                    </label>
                    <label>
                        Unit:
                        <input required type="text" value={unit} onChange={e => setUnit(e.target.value)} />
                    </label>
                    <label>
                    Category Name:
                        <input required type="text" value={catogoryID} onChange={e => setCatogoryID(e.target.value)} />
                    </label>

                    <div className="d_flex_add">
                        <button className="d_flex_add" type="submit">Add</button>
                    </div>
                </form>
                <br />
                <div className="d_flex_add">
                    <button className="btn-primary margin-btn" onClick={props.togglePopAdd}>Close</button>
                </div>
            </div>
        </div>
    )
}