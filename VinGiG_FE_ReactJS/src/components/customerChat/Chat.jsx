import React, { useEffect, useState } from "react"
import axios from 'axios';
import ChatBox from "./ChatBox";

function Chat() {

    const customerID = JSON.parse(localStorage.getItem("accessToken")).customerID;
    const chatBookingID = localStorage.getItem("chatBookingID");

    const [bookings, setBookings] = useState([]);
    const [selectedBookingID, setSelectedBookingID] = useState(chatBookingID);

    const handleBookingClick = (bookingID) => {
        setSelectedBookingID(bookingID);
    };
    useEffect(() => {
        axios.get(`http://localhost:8081/vingig/customer/${customerID}/bookingMessage`)
            .then(res => {
                const bookings = res.data;
                setBookings(bookings);
            })
            .catch(error => console.log(error));
    }
        , []);
    return (
        <>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className="chatContainer containerHeight">
                <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="card chat-app">
                            <div id="plist" className="people-list">
                                <ul className="list-unstyled chat-list mt-2 mb-0">
                                    {bookings.slice().reverse().map(booking => (
                                        <li
                                            key={booking.bookingID}
                                            className={`clearfix ${selectedBookingID == booking.bookingID ? 'active' : ''}`}
                                            onClick={() => handleBookingClick(booking.bookingID)}
                                        >
                                            <img src={booking.providerAvatar} alt="avatar" />
                                            <div className="about">
                                                <div className="name">{booking.providerFullName}</div>
                                                <div className="status">{booking.serviceName}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {selectedBookingID && (
                                <ChatBox bookingID={selectedBookingID}></ChatBox>
                            )}

                        </div >
                    </div >
                </div >
            </div >
        </>
    )
}

export default Chat