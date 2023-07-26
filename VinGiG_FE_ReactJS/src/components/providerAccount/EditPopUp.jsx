import axios from 'axios';
import React, { useState, useEffect } from "react"

export default function EditPopUp(props) {

    const [address, setAddress] = useState('')
    const [avatar, setAvatar] = useState('')
    const [createDate, setCreateDate] = useState('')
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [rating, setRating] = useState('')
    const [role, setRole] = useState('')
    const [username, setUserName] = useState('')
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
        axios.get(`http://localhost:8081/vingig/customer/${props.customerID}`)
            .then(res => {
                const customer = res.data;
                setAddress(customer.address);
                setAvatar(customer.avatar);
                setCreateDate(customer.createDate);
                setEmail(customer.email);
                setFullName(customer.fullName);
                setGender(customer.gender);
                setPassword(customer.password);
                setPhone(customer.phone);
                setRating(customer.rating);
                setRole(customer.role);
                setUserName(customer.username);
                setBuildingID(customer.buildingID);
                setBuildingName(customer.buildingName);
            }).catch(error => console.log(error));
        loadBuildings();
    }, []);
    async function handleEdit(e) {
        e.preventDefault()
        // Code to handle edit
        await axios.put(`http://localhost:8081/vingig/building/${props.customerID}/customer`,
            {
                active: true,
                address: address,
                avatar: avatar,
                createDate: createDate,
                email: email,
                fullName: fullName,
                gender: gender,
                password: password,
                phone: phone,
                rating: rating,
                role: role,
                username: username,
                buildingID: buildingID,
            })
            .catch(error => console.log(error));
        props.togglePopEdit();
        props.loadCustomer();
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Edit Account Information</h2>
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