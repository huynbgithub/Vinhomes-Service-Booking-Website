import axios from 'axios';
import React, { useState, useEffect } from "react"

export default function EditPopUp(props) {
    const [description, setDescription] = useState('')
    const [unitPrice, setUnitPrice] = useState('')
    useEffect(() => {
        setDescription(props.pService.description);
        setUnitPrice(props.pService.unitPrice);
    }, []);
    async function handleEdit(e) {
        e.preventDefault()
        // Code to handle edit
        await axios.put(`http://localhost:8081/vingig/provider/${props.pService.providerID}/giGService/${props.pService.serviceID}/providerService`,
            {
                proServiceID: props.pService.proServiceID,
                active: props.pService.active,
                availability: props.pService.availability,
                visible: props.pService.visible,
                bookingNo: props.pService.bookingNo,
                rating: props.pService.rating,
                description: description,
                unitPrice: unitPrice,
            })
            .catch(error => console.log(error));
        props.togglePopEdit();
        props.getProviderService();
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Edit</h2>
                <form onSubmit={handleEdit}>
                    <label>
                        Description:
                        <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
                    </label>
                    <label>
                        Unit Price:
                        <input type="text" value={unitPrice} onChange={e => setUnitPrice(e.target.value)} />
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