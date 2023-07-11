import axios from 'axios';
import React, { useState, useEffect } from "react"
import { storage } from '../../firebase.js';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function AddPopUp(props) {

    const [categoryID, setCategoryID] = useState('')
    const [serviceID, setServiceID] = useState('')
    const [description, setDescription] = useState('')
    const [unitPrice, setUnitPrice] = useState('')
    const [image, setSelectedImage] = useState(null);

    async function handleAdd(e) {
        e.preventDefault();

        const storageRef = ref(storage, `images/${image.name}`);

        // Upload the image to Firebase Storage
        uploadBytes(storageRef, image).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                // Set the image URL to the "link" field
                axios
                    .post(
                        `http://localhost:8081/vingig/provider/${props.providerID}/giGService/${serviceID}/providerService`,
                        {
                            active: true,
                            availability: true,
                            visible: true,
                            bookingNo: 0,
                            rating: 0,
                            description: description,
                            unitPrice: unitPrice,
                            link: url, // Set the image URL here
                        }
                    )
                    .then(() => {
                        props.togglePopAdd();
                        props.loadServices();
                    })
                    .catch((error) => console.log(error));
            });
        });
    }

    const [categories, setCategories] = useState([]);

    const loadCategories = async () => {
        await axios.get(`http://localhost:8081/vingig/serviceCategories`)
            .then(res => {
                const categories = res.data;
                setCategories(categories);
            })
            .catch(error => console.log(error));
    }

    const [services, setServices] = useState([]);
    const loadServices = () => {
        axios.get(`http://localhost:8081/vingig/serviceCategory/${categoryID}/giGServices`)
            .then(res => {
                const services = res.data;
                setServices(services);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        loadCategories();
    }, []);

    useEffect(() => {
        loadServices();
    }, [categoryID])

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Add Service</h2>
                <form onSubmit={handleAdd}>
                    <label>
                        Category:
                        <select required onChange={e => setCategoryID(e.target.value)}>
                            <option value=""></option>
                            {categories.map((category) => (
                                <option value={category.categoryID}>{category.categoryName}</option>
                            ))}
                        </select>
                    </label>
                    {categoryID ?
                        <label>
                            Service:
                            <select required onChange={e => setServiceID(e.target.value)}>
                                <option value=""></option>
                                {services.map((service) => (
                                    <option value={service.serviceID}>{service.serviceName}</option>
                                ))}
                            </select>
                        </label> : <></>}
                    <label>
                        Description:
                        <input required type="text" value={description} onChange={e => setDescription(e.target.value)} />
                    </label>
                    <label>
                        Unit Price:
                        <input required type="number" value={unitPrice} onChange={e => setUnitPrice(e.target.value)} />
                    </label>
                    <label>
                        Image:
                        <input required type="file" onChange={e => setSelectedImage(e.target.files[0])} />
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