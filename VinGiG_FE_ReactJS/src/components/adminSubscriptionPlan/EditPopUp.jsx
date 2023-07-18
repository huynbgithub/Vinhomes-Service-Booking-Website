import "./popup.css"
import axios from 'axios';
import React, { useState, useEffect } from "react"

export default function EditPopUp(props) {

    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [price, setPrice] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:8081/vingig/subscriptionPlan/${props.planID}`)
            .then(res => {
                const plan = res.data;
                setDescription(plan.description);
                setDuration(plan.duration);
                setPrice(plan.price);
            }).catch(error => console.log(error));
    }, []);
    async function handleEdit(e) {
        e.preventDefault()
        // Code to handle edit
        await axios.put(`http://localhost:8081/vingig/subscriptionPlan`,
            {
                planID: props.planID,
                active: true,
                description: description,
                duration: duration,
                price: price,
            })
            .catch(error => console.log(error));
        props.togglePopEdit();
        props.loadPlans();
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Edit Subscription Plan</h2>
                <form onSubmit={handleEdit}>
                    <label>
                        Description:
                        <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
                    </label>
                    <label>
                        Duration:
                        <input type="number" value={duration} onChange={e => setDuration(e.target.value)} />
                    </label>
                    <label>
                        Price:
                        <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
                    </label>
                    <div className="d_flex_add">
                        <button className="d_flex_add" type="submit">Save</button>
                    </div>
                </form>
                <br />
                <div className="d_flex_add">
                    <button className="btn-primary margin-btn" onClick={props.togglePopEdit}>Close</button>
                </div>
            </div>
        </div>
    )
}