import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Services from "./Services";
import axios from 'axios';
import { useOnHoverOutside } from "../../hooks/useOnHoverOutside";

function Navbar() {
    const [cates, setCates] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8081/vingig/serviceCategories`)
            .then(res => {
                const cates = res.data;
                setCates(cates);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='catgrories d_flex'>
                        <span class='fa-solid fa-border-all'></span>
                        <h4>
                            Services
                            {/* <i className='fa fa-chevron-down'></i> */}
                        </h4>
                    </div>
                    <div className='navlink'>
                        <ul className="link f_flex capitalize" >
                            {cates.map((cate, index) => { return <Services cate={cate} key={index}></Services> }
                            )}
                        </ul>
                    </div>
                </div>
            </header >
        </>
    );
}

export default Navbar;
