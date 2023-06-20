import React, { useEffect, useState } from "react"
import "./style.css"
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

function ChatBox({ bookingID }) {
    const [content, setContent] = useState("");

    const [messages, setMessages] = useState([]);
    const history = useHistory();
    useEffect(() => {
        axios.get(`http://localhost:8081/vingig/booking/${bookingID}/bookingMessage`)
            .then(res => {
                const messages = res.data;
                setMessages(messages);
            })
            .catch(error => console.log(error));
    }, [bookingID]);

    async function send(event) {
        event.preventDefault();
        await axios.post(`http://localhost:8081/vingig/booking/${bookingID}/bookingMessage`,
            {
                content: content,
                sendBy: true,
                time: new Date().toLocaleString(),
            }
        ).then(history.push("/customer/chat"))
            .catch(error => console.log(error));
    }
    return (
        <div className="chat">
            {/* <div className="chat-header clearfix">
                <div className="row">
                    <div className="col-lg-6">
                        <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                        </a>
                        <div className="chat-about">
                            <h6 className="m-b-0">Aiden Chavez</h6>
                            <small>Last seen: 2 hours ago</small>
                        </div>
                    </div>
                     <div className="col-lg-6 hidden-sm text-right">
                <a href="javascript:void(0);" className="btn btn-outline-secondary"><i className="fa fa-camera" /></a>
                <a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-image" /></a>
                <a href="javascript:void(0);" className="btn btn-outline-info"><i className="fa fa-cogs" /></a>
                <a href="javascript:void(0);" className="btn btn-outline-warning"><i className="fa fa-question" /></a>
            </div> 
                </div>
            </div>*/}
            <div className="chat-history">
                <ul className="m-b-0">
                    {messages.map(message => {
                        if (message.sendBy === false) {
                            return (
                                <li className="clearfix">
                                    <div className="message-data">
                                        <span className="message-data-time">{message.time}</span>
                                    </div>
                                    <div className="message my-message">{message.content}</div>
                                </li>
                            );
                        } else {
                            return (
                                <li className="clearfix">
                                    <div className="message-data text-right">
                                        <span className="message-data-time">{message.time}</span>
                                    </div>
                                    <div className="message other-message float-right">{message.content}</div>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
            <div className="chat-message clearfix">
                <form className="input-group mb-0 inputContainer">
                    <input type="text" className="form-control" value={content} placeholder="Enter text here..." onChange={(event) => { setContent(event.target.value); }} />
                    {/* <input type="hidden" className="form-control" value={bookingID} placeholder="Enter text here..." onChange={(event) => { setBookingID(event.target.value); }} /> */}
                    <div className="input-group-prepend" >
                        <button type="submit" className="input-group-text"><i className="fa fa-send" onClick={(event) => send(event)} /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChatBox