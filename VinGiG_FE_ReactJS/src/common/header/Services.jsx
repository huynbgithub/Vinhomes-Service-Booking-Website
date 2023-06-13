import React, { useEffect, useState, useRef } from 'react';
import { useOnHoverOutside } from "../../hooks/useOnHoverOutside";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Services = ({ cate }) => {
    const [sers, setSers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8081/vingig/serviceCategory/${cate.categoryID}/giGServices`)
            .then(res => {
                const sers = res.data;
                setSers(sers);
            })
            .catch(error => console.log(error));
    }, []);
    const dropdownRef = useRef(null); // Create a reference for dropdown container
    const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

    // Function to close dropdown
    const closeHoverMenu = () => {
        setMenuDropDownOpen(false);
    };
    useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook
    return (
        <li className='font-size-1' ref={dropdownRef}>
            <div onMouseOver={() => setMenuDropDownOpen(true)}>
                {cate.categoryName} <i className='fa fa-chevron-down'></i>
            </div>
            {isMenuDropDownOpen &&
                <div className='dropdown'>
                    {sers.map(ser =>
                        <Link to={`/serviceProvider/${ser.serviceName}`}>
                            <div className='dropdown-item' >
                                {ser.serviceName}
                            </div>
                        </Link>
                    )}
                </div>}
        </li >
    );
};

export default Services;