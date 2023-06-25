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
    const [badgeID, setBadgeID] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:8081/vingig/building/{buildingID}/badge/{badgeID}/provider/${props.providerID}`)
            .then(res => {
                const provider = res.data;
                setAddress(provider.address);
                setAvatar(provider.avatar);
                setCreatDate(provider.creatDate);
                setEmail(provider.email);
                setfullName(provider.fullName);
                setGender(provider.gender);
                setPassword(provider.password);
                setPhone(provider.phone);
                setRating(provider.rating);
                setRole(provider.role);
                setUserName(provider.username);
                setBadgeID(provider.badgeID);
            }).catch(error => console.log(error));
    }, []);
    async function handleEdit(e) {
        e.preventDefault()
        // Code to handle edit
        await axios.put(`http://localhost:8081/vingig/providers`,
            {
                providerID: props.providerID,
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
                badgeID: badgeID,
            })
            .catch(error => console.log(error));
        props.togglePopEdit();
        props.loadproviders();
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Edit Building</h2>
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