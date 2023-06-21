import "./popup.css"
import axios from 'axios';
import React, { useState, useEffect } from "react"

export default function EditPopUp(props) {

    const [badgeName, setBadgeName] = useState('')

    const [benefit, setBenefit] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:8081/vingig/badge/${props.badgeID}`)
            .then(res => {
                const badge = res.data;
                setBadgeName(badge.badgeName);
                setBenefit(badge.benefit);
                setDescription(badge.description);

            }).catch(error => console.log(error));
    }, []);
    async function handleEdit(e) {
        e.preventDefault()
        // Code to handle edit
        await axios.put(`http://localhost:8081/vingig/badge`,
            {
                badgeID: props.badgeID,
                active: true,
                badgeName: badgeName,
                benefit: benefit,
                description: description,

            })
            .catch(error => console.log(error));
        props.togglePopEdit();
        props.loadBadges();
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Edit Badge</h2>
                <form onSubmit={handleEdit}>
                    <label>
                        Badge Name:
                        <input type="text" value={badgeName} onChange={e => setBadgeName(e.target.value)} />
                    </label>
                    <label>
                        Benefit:
                        <input type="text" value={benefit} onChange={e => setBenefit(e.target.value)} />
                    </label>
                    <label>
                        Description:
                        <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
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