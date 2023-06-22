import "./popup.css"
import axios from 'axios';
import React, { useState, useEffect } from "react"

export default function EditPopUp(props) {

    const [categoryName, setCategoryName] = useState('')
    const [description, setDescription] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:8081/vingig/serviceCategory/${props.categoryID}`)
            .then(res => {
                const category = res.data;
                setCategoryName(category.categoryName);
                setDescription(category.description);
            }).catch(error => console.log(error));
    }, []);
    async function handleEdit(e) {
        e.preventDefault()
        // Code to handle edit
        await axios.put(`http://localhost:8081/vingig/serviceCategory`,
            {
                categoryID: props.categoryID,
                active: true,
                categoryName: categoryName,
                description: description,
            })
            .catch(error => console.log(error));
        props.togglePopEdit();
        props.loadCategorys();
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Edit serviceCategory</h2>
                <form onSubmit={handleEdit}>
                    <label>
                        Name:
                        <input type="text" value={categoryName} onChange={e => setCategoryName(e.target.value)} />
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