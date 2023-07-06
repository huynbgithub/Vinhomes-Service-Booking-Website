import React, { useEffect, useState } from "react"
import axios from 'axios';

function ChatBox({ bookingID }) {
    const [content, setContent] = useState("");

    const [messages, setMessages] = useState([]);
    useEffect(() => {
        loadMessages();
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
                content: content,
                sendBy: true,
            }).catch(error => console.log(error));
        loadMessages();
        setContent("");
    }
    return (
        <div className="chat">
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
                        if (message.sendBy === false) {
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
                    <div className="input-group-prepend" >
                        <button type="submit" className="input-group-text btn-green"><i className="fa fa-send" /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChatBox