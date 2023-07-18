import "./popup.css"
import axios from 'axios';
import React, { useState } from "react"

export default function AddPopUp(props) {

    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [price, setPrice] = useState('')

    async function handleAdd(e) {
        e.preventDefault()
        // Code to handle add
        await axios.post(`http://localhost:8081/vingig/subscriptionPlan`,
            {
                active: true,
                description: description,
                duration: duration,
                price: price,
            })
            .catch(error => console.log(error));
        props.togglePopAdd();
        props.loadPlans();
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Add Subscription Plan</h2>
                <form onSubmit={handleAdd}>
                    <label>
                        Description:
                        <input required type="text" value={description} onChange={e => setDescription(e.target.value)} />
                    </label>
                    <label>
                        Duration:
                        <input required type="number" value={duration} onChange={e => setDuration(e.target.value)} />
                    </label>
                    <label>
                        Price:
                        <input required type="number" value={price} onChange={e => setPrice(e.target.value)} />
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