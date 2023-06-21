import "./popup.css"
import axios from 'axios';
import React, { useState } from "react"

export default function AddPopUp(props) {

    const [buildingName, setBuildingName] = useState('')
    const [note, setNote] = useState('')

    async function handleAdd(e) {
        e.preventDefault()
        // Code to handle add
        await axios.post(`http://localhost:8081/vingig/building`,
            {
                active: true,
                buildingName: buildingName,
                note: note,
            })
            .catch(error => console.log(error));
        props.togglePopAdd();
        props.loadBuildings();
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Add Building</h2>
                <form onSubmit={handleAdd}>
                    <label>
                        Building Name:
                        <input required type="text" value={buildingName} onChange={e => setBuildingName(e.target.value)} />
                    </label>
                    <label>
                        Area:
                        <input required type="text" value={note} onChange={e => setNote(e.target.value)} />
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