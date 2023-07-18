import "./popup.css"
import axios from 'axios';
import React, { useState, useEffect } from "react"

export default function EditPopUp(props) {
    // const [buildings, setBuildings] = useState([]);
    // const [buildingID, setBuildingID] = useState("");
    const [description, setDescription] = useState('')
    const [fee, setFee] = useState('')
    const [priceMax, setPriceMax] = useState('')
    const [priceMin, setPriceMin] = useState('')
    const [serviceName, setServiceName] = useState('')
    const [unit, setUnit] = useState('')
    const [categoryID, setCategoryID] = useState('')
    const [categoryName, setCategoryName] = useState('')
    const [categories, setCategories] = useState([]);

    const loadCategories = () => {
        axios.get(`http://localhost:8081/vingig/serviceCategories`)
            .then(res => {
                const categories = res.data;
                setCategories(categories);
            })
            .catch(error => console.log(error));
    }
    useEffect(() => {
        axios.get(`http://localhost:8081/vingig/giGService/${props.serviceID}`)
            .then(res => {
                const service = res.data;
                setDescription(service.description);
                setFee(service.fee);
                setPriceMax(service.priceMax);
                setPriceMin(service.priceMin);
                setServiceName(service.serviceName);
                setUnit(service.unit);
                setCategoryID(service.categoryID);
                setCategoryName(service.categoryName);
            }).catch(error => console.log(error));
        loadCategories();
    }, []);
    async function handleEdit(e) {
        e.preventDefault()
        // Code to handle edit
        await axios.put(`http://localhost:8081/vingig/giGService`,
            {
                serviceID: props.serviceID,
                active: true,
                description: description,
                fee: fee,
                priceMax: priceMax,
                priceMin: priceMin,
                serviceName: serviceName,
                unit: unit,
                categoryID: categoryID,

            })
            .catch(error => console.log(error));
        props.togglePopEdit();
        props.loadServices();
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Edit Service</h2>
                <form onSubmit={handleEdit}>
                    <label>
                        Service Name:
                        <input type="text" value={serviceName} onChange={e => setServiceName(e.target.value)} />
                    </label>
                    <label>
                        Description:
                        <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
                    </label>
                    <label>
                        Fee:
                        <input type="text" value={fee} onChange={e => setFee(e.target.value)} />
                    </label>
                    <label>
                        PriceMax:
                        <input type="number" value={priceMax} onChange={e => setPriceMax(e.target.value)} />
                    </label>
                    <label>
                        PriceMin:
                        <input type="number" value={priceMin} onChange={e => setPriceMin(e.target.value)} />
                    </label>
                    <label>
                        Unit:
                        <input type="text" value={unit} onChange={e => setUnit(e.target.value)} />
                    </label>
                    <label>
                        Category Name:
                        <select required onChange={e => setCategoryID(e.target.value)}>
                            <option value={categoryID}>{categoryName}</option>
                            {categories.map((category) => (
                                <option value={category.categoryID}>{category.categoryName}</option>
                            ))}
                        </select>
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