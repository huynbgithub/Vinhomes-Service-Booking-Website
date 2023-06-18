import React, { useState } from "react"
// import Catg from "./Catg"
// import ShopCart from "./ShopCart"
import "./style.css"

function Login(props) {
    const [message, setMessage] = useState('')

    function handleLogin(e) {
        e.preventDefault()
        // Code to handle login goes here
        props.toggle()
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Trần Văn Hùng</h2>
                <p>Hi</p>
                <p>When will you come?</p>
                <p>7h30.</p>
                <form onSubmit={handleLogin}>
                    <label>
                        Message:
                        <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
                    </label>
                    <button type="submit">Send</button>
                </form>
                <a onClick={props.toggle}>Close</a>
            </div>
        </div>
    )
}

export default Login