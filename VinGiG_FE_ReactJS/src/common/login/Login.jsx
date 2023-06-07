import React, { useState } from "react"
// import Catg from "./Catg"
// import ShopCart from "./ShopCart"
import "./style.css"

function Login() {
    // function Login(props) {
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')

    // function handleLogin(e) {
    //     e.preventDefault()
    //     // Code to handle login goes here
    //     props.toggle()
    // }

    return (
        <div>
            <div id="page">
                <div class="page-inner">
                    {/*<h2 class ="gold-color">VNFLIGHT: Sign in/up Form</h2>*/}
                    <h4 className="gold-color"></h4>
                    <div className="container" id="container">
                        <div className="form-container sign-up-container">
                            {/* <c:url var="signUpLink" value="${request.contextPath}/UserAccessController/signup"> */}
                            <form action="" name method="POST">
                                <h1>Create Account</h1>
                                <input type="text" placeholder="Username" name="username" />
                                <input type="email" placeholder="Email" name="email" />
                                <input type="number" placeholder="Phone" name="phone" />
                                <input type="password" placeholder="Password" name="password" />
                                <p className="text-danger"></p>
                                <button type="submit">Sign Up</button>
                            </form>
                            {/* </c:url> */}
                        </div>
                        <div className="form-container sign-in-container">
                            {/* <c:url var="loginLink" value="${request.contextPath}/UserAccessController/login"> */}
                            <form action="" name method="POST">
                                <h1>User Login</h1>
                                <input type="text&quot;" placeholder="Username" name="username" />
                                <input type="password" placeholder="Password" name="password" />
                                <p className="text-danger"></p>
                                <button type="submit">Login</button>
                                <a href="">Login as admin</a>
                            </form>
                            {/* </c:url> */}
                        </div>
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1>Welcome Back!</h1>
                                    <p>To keep connected with us please login with your personal info</p>
                                    <button className="ghost" id="signIn">Log In</button>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <h1>Hello!</h1>
                                    <p>Enter your personal details and start journey with us</p>
                                    <button className="ghost" id="signUp">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>

    )
}

export default Login
