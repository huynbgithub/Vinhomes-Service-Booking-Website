import React, { useState } from "react"
// import Catg from "./Catg"
// import ShopCart from "./ShopCart"
import "./style.css"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Login() {

    const [activePanel, setActivePanel] = useState(false);

    const handleSignUpClick = () => {
        setActivePanel(true);
    };

    const handleSignInClick = () => {
        setActivePanel(false);
    };

    // const [cates, setCates] = useState([]);

    // useEffect(() => {
    //     axios.get(`http://localhost:8081/vingig/serviceCategories`)
    //         .then(res => {
    //             const cates = res.data;
    //             setCates(cates);
    //         })
    //         .catch(error => console.log(error));
    // }, []);
    const signin =
    {
        username: "abc",
        password: "180",
    }
    let history = useHistory()
    let login = () => {
        localStorage.setItem("accessToken", "1")
        history.replace("/")
    }
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
                            {/* <c:url var="loginLink" value="${request.contextPath}/UserAccessController/login"> */}
                            {/* <form action="" name method="POST"> */}
                            <form action="" >
                                <h1>User Login</h1>
                                <input type="text" placeholder="Username" name="username" />
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
                                    <li className="c_flex">
                                        <input type="radio" name="role" value="customer" />
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
