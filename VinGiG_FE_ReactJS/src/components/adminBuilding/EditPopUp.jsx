import "./popup.css"
import axios from 'axios';
import React, { useState, useEffect } from "react"

export default function EditPopUp(props) {

    const [buildingName, setBuildingName] = useState('')
    const [note, setNote] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:8081/vingig/building/${props.buildingID}`)
            .then(res => {
                const building = res.data;
                setBuildingName(building.buildingName);
                setNote(building.note);
            }).catch(error => console.log(error));
    }, []);
    async function handleEdit(e) {
        e.preventDefault()
        // Code to handle edit
        await axios.put(`http://localhost:8081/vingig/building`,
            {
                buildingID: props.buildingID,
                active: true,
                buildingName: buildingName,
                note: note,
            })
            .catch(error => console.log(error));
        props.togglePopEdit();
        props.loadBuildings();
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Edit Building</h2>
                <form onSubmit={handleEdit}>
                    <label>
                        Building Name:
                        <input type="text" value={buildingName} onChange={e => setBuildingName(e.target.value)} />
                    </label>
                    <label>
                        Area:
                        <input type="text" value={note} onChange={e => setNote(e.target.value)} />
                    </label>
                    <div className="d_flex_add">
                        <button className="d_flex_add" type="submit">Add</button>
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