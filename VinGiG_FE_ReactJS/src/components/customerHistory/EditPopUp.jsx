import axios from 'axios';
import React, { useState, useEffect } from "react"

export default function EditPopUp(props) {

    const [customerID, setCustomerID] = useState('')
    const [review, setReview] = useState('')
    const [pReview, setPReview] = useState('')
    const [rating, setRating] = useState('')
    const [pRating, setPRating] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:8081/vingig/booking/${props.bookingID}`)
            .then(res => {
                const booking = res.data;
                setCustomerID(booking.customerID);
                setReview(booking.customersReview);
                setRating(booking.customersRating);
                setPReview(booking.providersReview);
                setPRating(booking.providersRating);
            }).catch(error => console.log(error));
    }, []);
    async function handleEdit(e) {
        e.preventDefault()
        // Code to handle edit
        await axios.put(`http://localhost:8081/vingig/customer/${customerID}/booking/${props.bookingID}/content/${review}/rating/${rating}`,
            {})
            .catch(error => console.log(error));
        props.togglePopEdit();
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Review</h2>
                <br />
                <form onSubmit={handleEdit}>
                    <label>
                        Your Review:
                        <input type="text" value={review} onChange={e => setReview(e.target.value)} />
                    </label>
                    <label>
                        Rate Service:
                        <div className="star-rating">
                            {Array.from({ length: 5 }, (_, index) => {
                                const starValue = index + 1;
                                const isSelected = starValue <= rating;

                                return (
                                    <i
                                        className={`icon-J fa fa-star ${isSelected ? ' selected' : ''}`}
                                        key={index}
                                        onClick={() => setRating(starValue)}
                                    ></i>
                                );
                            })}
                        </div>
                    </label>
                    <div className="d_flex_add">
                        <button className="d_flex_add" type="submit">Save</button>
                    </div>
                    {pReview != null ? <>
                        <br />
                        <label>
                            Provider's Review:
                            <div className='rr'>{pReview}</div>
                        </label>
                    </> : null}
                    {pRating != 0 ? <>
                        <br />
                        <label>
                            Provider's Rating:
                            <div className=''>
                                {Array.from({ length: pRating }, (_, index) => (
                                    <i className='icon-H fa fa-star' key={index}></i>
                                ))}
                            </div>
                        </label>
                    </> : null}
                </form>
                <div className="d_flex_add mg-top">
                    <button className="btn-primary margin-btn" onClick={props.togglePopEdit}>Close</button>
                </div>
            </div>
        </div>
    )
}