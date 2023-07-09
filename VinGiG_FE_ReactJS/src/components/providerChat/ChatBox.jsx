import React, { useEffect, useState } from "react"
import "./style.css"
import axios from 'axios';
import {over} from 'stompjs';
import SockJS from 'sockjs-client';

var stompClient =null;
function ChatBox({ bookingID }) {
    const [content, setContent] = useState("");

    const [messages, setMessages] = useState([]);
    useEffect(() => {
        loadMessages();
        connect();
    }, [bookingID]);

    function loadMessages() {
        axios.get(`http://localhost:8081/vingig/booking/${bookingID}/bookingMessage`)
            .then(res => {
                const messages = res.data;
                setMessages(messages);
            })
            .catch(error => console.log(error));
    }
    async function send(event) {
        event.preventDefault();
        await axios.post(`http://localhost:8081/vingig/booking/${bookingID}/bookingMessage`,
            {
                bookingID: bookingID,
                content: content,
                sendBy: false,
            }).catch(error => console.log(error));

        if (stompClient) {
            var chatMessage = {
              bookingID: bookingID,
              sendBy: false,
              content: content,        
            };
            console.log(chatMessage);
            stompClient.send("/app/messages", {}, JSON.stringify(chatMessage));
            loadMessages();
            setContent("");
        }
    }

    const connect =()=>{
        let Sock = new SockJS('http://localhost:8081/vingig/websocket');
        stompClient = over(Sock);
        stompClient.connect({},onConnected, onError);
    }

    const onConnected = () => {
        let access = JSON.parse(localStorage.getItem("accessToken"));
        let role = access.role;
        let id;
        if(role === "provider") id = access.providerID
        else id = access.customerID;
        stompClient.subscribe(`/user/${id}/`+ role + `/messages`, onMessageReceived);
    }

    const onError = (err) => {
        console.log(err);    
    }

    const onMessageReceived = (payload)=>{
        console.log(payload);
        loadMessages();      
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
                        var epochTime = message.time;

                        var dateObj = new Date(epochTime);

                        var date = dateObj.getDate();
                        var month = dateObj.getMonth() + 1;
                        var year = dateObj.getYear() - 100 + 2000;
                        var hours = dateObj.getHours();
                        var minutes = dateObj.getMinutes();
                        var seconds = dateObj.getSeconds();

                        var formattedTime =
                            date.toString() + '/' +
                            month.toString() + '/' +
                            year.toString() + ' ' +
                            hours.toString().padStart(2, '0') + ':' +
                            minutes.toString().padStart(2, '0') + ':' +
                            seconds.toString().padStart(2, '0');
                        if (message.sendBy === true) {
                            return (
                                <li className="clearfix">
                                    <div className="message-data">
                                        <span className="message-data-time">{formattedTime}</span>
                                    </div>
                                    <div className="message my-message">{message.content}</div>
                                </li>
                            );
                        } else {
                            return (
                                <li className="clearfix">
                                    <div className="message-data text-right">
                                        <span className="message-data-time">
                                            {formattedTime}</span>
                                    </div>
                                    <div className="message other-message float-right">{message.content}</div>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
            <div className="chat-message clearfix">
                <form className="input-group mb-0 inputContainer" onSubmit={(event) => send(event)}>
                    <input type="text" className="form-control" value={content} placeholder="Enter text here..." onChange={(event) => { setContent(event.target.value); }} />
                    {/* <input type="hidden" className="form-control" value={bookingID} placeholder="Enter text here..." onChange={(event) => { setBookingID(event.target.value); }} /> */}
                    <div className="input-group-prepend" >
                        <button type="submit" className="input-group-text btn-green"><i className="fa fa-send" /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChatBox