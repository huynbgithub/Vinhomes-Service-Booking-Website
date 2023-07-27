import "./popup.css"
import axios from 'axios';
import React, { useState, useEffect } from "react"

export default function EditPopUp(props) {

    const [address, setAddress] = useState('')
    const [avatar, setAvatar] = useState('')
    const [createDate, setCreateDate] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [rating, setRating] = useState('')
    const [role, setRole] = useState('')
    const [username, setUserName] = useState('')
    const [badgeID, setBadgeID] = useState('')
    const [buildingID, setBuildingID] = useState('')
    const [buildingName, setBuildingName] = useState('')
    const [buildings, setBuildings] = useState([]);
    const loadBuildings = () => {
        axios.get(`http://localhost:8081/vingig/buildings`)
            .then(res => {
                const buildings = res.data;
                setBuildings(buildings);
            })
            .catch(error => console.log(error));
    }
    useEffect(() => {
        axios.get(`http://localhost:8081/vingig/provider/${props.providerID}`)
            .then(res => {
                const provider = res.data;
                setAddress(provider.address);
                setAvatar(provider.avatar);
                setCreateDate(provider.createDate);
                setDob(provider.dob);
                setEmail(provider.email);
                setFullName(provider.fullName);
                setGender(provider.gender);
                setPassword(provider.password);
                setPhone(provider.phone);
                setRating(provider.rating);
                setRole(provider.role);
                setUserName(provider.username);
                setBadgeID(provider.badgeID);
                setBuildingID(provider.buildingID);
                setBuildingName(provider.buildingName);
            }).catch(error => console.log(error));
        loadBuildings();
    }, []);
    async function handleEdit(e) {
        e.preventDefault()
        // Code to handle edit
        await axios.put(`http://localhost:8081/vingig/building/${buildingID}/badge/${badgeID}/provider`,
            {
                providerID: props.providerID,
                active: true,
                address: address,
                avatar: avatar,
                dob: dob,
                createDate: createDate,
                email: email,
                fullName: fullName,
                gender: gender,
                phone: phone,
                rating: rating,
                role: role,
            })
            .catch(error => console.log(error));
        props.togglePopEdit();
        props.loadproviders();
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Edit Provider</h2>
                <form onSubmit={handleEdit}>
                    <label>
                        Name:
                        <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} />
                    </label>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Phone:
                        <input type="number" value={phone} onChange={e => setPhone(e.target.value)} />
                    </label>
                    {/* <label>
                        Date of Birth:
                        <input type="date" value={dob} onChange={e => setDob(e.target.value)} />
                    </label> */}
                    <label>
                        Gender:
                        <select required onChange={e => setGender(e.target.value)}>
                            <option value={gender}>{gender ? "Nam" : "Nữ"}</option>
                            <option value={true}>Nam</option>
                            <option value={false}>Nữ</option>
                        </select>
                    </label>
                    <label>
                        Building:
                        <select required onChange={e => setBuildingID(e.target.value)}>
                            <option value={buildingID}>{buildingName}</option>
                            {buildings.map((building) => (
                                <option value={building.buildingID}>{building.buildingName}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Address:
                        <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
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