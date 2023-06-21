import "./popup.css"
import axios from 'axios';
import React, { useState } from "react"

export default function AddPopUp(props) {

    const [badgeName, setBadgeName] = useState('')
    const [benefit, setbenefit] = useState('')
    const [description, setdescription] = useState('')

    async function handleAdd(e) {
        e.preventDefault()
        // Code to handle add
        await axios.post(`http://localhost:8081/vingig/badge`,
            {
                active: true,
                badgeName: badgeName,
                benefit: benefit,
                description: description,
            })
            .catch(error => console.log(error));
        props.togglePopAdd();
        props.loadBadges();
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Add Building</h2>
                <form onSubmit={handleAdd}>
                    <label>
                        Badge Name:
                        <input required type="text" value={badgeName} onChange={e => setBadgeName(e.target.value)} />
                    </label>
                    <label>
                        Benefit:
                        <input required type="text" value={benefit} onChange={e => setbenefit(e.target.value)} />
                    </label>
                    <label>
                        Description:
                        <input required type="text" value={description} onChange={e => setdescription(e.target.value)} />
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