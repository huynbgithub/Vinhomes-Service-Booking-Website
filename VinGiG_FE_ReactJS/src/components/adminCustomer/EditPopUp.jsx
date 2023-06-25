import "./popup.css"
import axios from 'axios';
import React, { useState, useEffect } from "react"

export default function EditPopUp(props) {

    const [address, setAddress] = useState('')
    const [avatar, setAvatar] = useState('')
    const [creatDate, setCreatDate] = useState('')
    const [email, setEmail] = useState('')
    const [fullName, setfullName] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [rating, setRating] = useState('')
    const [role, setRole] = useState('')
    const [username, setUserName] = useState('')
    const [buildignID, setBuildingID] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:8081/vingig/building/${props.customerID}/customer`)
            .then(res => {
                const customer = res.data;
                setAddress(customer.address);
                setAvatar(customer.avatar);
                setCreatDate(customer.creatDate);
                setEmail(customer.email);
                setfullName(customer.fullName);
                setGender(customer.gender);
                setPassword(customer.password);
                setPhone(customer.phone);
                setRating(customer.rating);
                setRole(customer.role);
                setUserName(customer.username);
                setBuildingID(customer.badgeID);
            }).catch(error => console.log(error));
    }, []);
    async function handleEdit(e) {
        e.preventDefault()
        // Code to handle edit
        await axios.put(`http://localhost:8081/vingig/customers`,
            {
                customerID: props.customerID,
                active: true,
                address: address,
               
                avatar: avatar,
                creatDate: creatDate,
                email: email,
                fullName: fullName,
                gender: gender,
                password: password,
                phone: phone,
                rating: rating,
                role: role,
                username: username,
                buildignID: buildignID,
            })
            .catch(error => console.log(error));
        props.togglePopEdit();
        props.loadCustomer();
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Edit Customer</h2>
                <form onSubmit={handleEdit}>
                    <label>
                        Password:
                        <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
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