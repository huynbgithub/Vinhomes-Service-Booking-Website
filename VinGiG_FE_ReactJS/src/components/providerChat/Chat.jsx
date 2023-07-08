import React, { useEffect, useState } from "react"
import "./style.css"
import axios from 'axios';
import ChatBox from "./ChatBox";

function Chat() {

    const providerID = JSON.parse(localStorage.getItem("accessToken")).providerID;

    const [bookings, setBookings] = useState([]);
    const [selectedBookingID, setSelectedBookingID] = useState(null);
    const handleBookingClick = (bookingID) => {
        setSelectedBookingID(bookingID);
    };
    useEffect(() => {
        axios.get(`http://localhost:8081/vingig/provider/${providerID}/bookingMessage`)
            .then(res => {
                const bookings = res.data;
                setBookings(bookings);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className="chatContainer">
                <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="card chat-app">
                            <div id="plist" className="people-list">
                                {/* <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-search" /></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Search..." />
                                </div> */}
                                <ul className="list-unstyled chat-list mt-2 mb-0">
                                    {bookings.slice().reverse().map(booking => (
                                        <li
                                            key={booking.bookingID}
                                            className={`clearfix ${selectedBookingID === booking.bookingID ? 'active' : ''}`}
                                            onClick={() => handleBookingClick(booking.bookingID)}
                                        >
                                            <img src={booking.customerAvatar} alt="avatar" />
                                            <div className="about">
                                                <div className="name">{booking.customerFullName}</div>
                                                <div className="status">{booking.serviceName}</div>
                                            </div>
                                        </li>
                                    ))}
                                    {/* <li className="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
                                        <div className="about">
                                            <div className="name">Vincent Porter</div>
                                            <div className="status"> <i className="fa fa-circle offline" /> left 7 mins ago </div>
                                        </div>
                                    </li>
                                    <li className="clearfix active">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                                        <div className="about">
                                            <div className="name">Aiden Chavez</div>
                                            <div className="status"> <i className="fa fa-circle online" /> online </div>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                                        <div className="about">
                                            <div className="name">Mike Thomas</div>
                                            <div className="status"> <i className="fa fa-circle online" /> online </div>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                                        <div className="about">
                                            <div className="name">Christian Kelly</div>
                                            <div className="status"> <i className="fa fa-circle offline" /> left 10 hours ago </div>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar" />
                                        <div className="about">
                                            <div className="name">Monica Ward</div>
                                            <div className="status"> <i className="fa fa-circle online" /> online </div>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                                        <div className="about">
                                            <div className="name">Dean Henry</div>
                                            <div className="status"> <i className="fa fa-circle offline" /> offline since Oct 28 </div>
                                        </div>
                                    </li>*/}
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