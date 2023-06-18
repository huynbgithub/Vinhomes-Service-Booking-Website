import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import "./style.css"

function Login() {
    const [activePanel, setActivePanel] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const history = useHistory();

    const handleSignUpClick = () => {
        setActivePanel(true);
    };

    const handleSignInClick = () => {
        setActivePanel(false);
    };

    async function login(event) {
        event.preventDefault();
        await axios.get(`http://localhost:8081/vingig/login/username/${username}/password/${password}/role/${role}`)
            .then(res => {
                if (res.data == null) { history.push("/login"); }
                else {
                    const user = res.data;
                    localStorage.setItem("accessToken", JSON.stringify(user));
                    history.push("/");
                }
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <div id="page">
                <div class="page-inner">
                    {/*<h2 class ="gold-color">VINGIG: Sign in/up Form</h2>*/}
                    <h4 className="gold-color"></h4>
                    <div className={`container ${activePanel ? "right-panel-active" : ""}`} id="container">
                        <div className="form-container sign-up-container">
                            {/* <c:url var="signUpLink" value="${request.contextPath}/UserAccessController/signup"> */}
                            <form action="" name method="POST">
                                <h1>Create Account</h1>
                                <br></br>
                                <input type="text" placeholder="Username" name="username" />
                                <input type="email" placeholder="Email" name="email" />
                                <input type="number" placeholder="Phone" name="phone" />
                                <input type="password" placeholder="Password" name="password" />
                                <ul className="s_flex">
                                    <li className="c_flex">Role:</li>
                                    <li className="c_flex">
                                        <input type="radio" name="role" value="customer" />
                                        <label>Customer</label>
                                    </li>
                                    <li className="c_flex">
                                        <input type="radio" name="role" value="customer" />
                                        <label>Provider</label>
                                    </li>
                                </ul>
                                <p className="text-danger"></p>
                                <button type="submit">Register</button>
                            </form>
                            {/* </c:url> */}
                        </div>
                        <div className="form-container sign-in-container">
                            <form>
                                <h1>User Login</h1>
                                <input type="text" placeholder="Username" name="username" value={username} onChange={(event) => {
                                    setUsername(event.target.value);
                                }} />
                                <input type="password" placeholder="Password" name="password" value={password} onChange={(event) => {
                                    setPassword(event.target.value);
                                }} />
                                <ul className="s_flex">
                                    <li className="c_flex">Role:</li>
                                    <li className="c_flex">
                                        <input type="radio" name="role" value="customer" onChange={(event) => { setRole(event.target.value); }} />
                                        <label>Customer</label>
                                    </li>
                                    <li className="c_flex">
                                        <input type="radio" name="role" value="provider" onChange={(event) => { setRole(event.target.value); }} />
                                        <label>Provider</label>
                                    </li>
                                    <li className="c_flex">
                                        <input type="radio" name="role" value="admin" onChange={(event) => { setRole(event.target.value); }} />
                                        <label>Admin</label>
                                    </li>
                                </ul>
                                <p className="text-danger"></p>
                                <button type="submit" onClick={login}>Login</button>
                                <Link to="/" className="underline">Back To Home</Link>
                            </form>
                            {/* </c:url> */}
                        </div>
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1>Welcome Back!</h1>
                                    <p>To keep connected with us please login with your personal info</p>
                                    <button className="ghost" id="signIn" onClick={handleSignInClick}>Log In</button>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <h1>Hello!</h1>
                                    <p>Enter your personal details and start journey with us</p>
                                    <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div >
        </div >

    )
}

export default Login
