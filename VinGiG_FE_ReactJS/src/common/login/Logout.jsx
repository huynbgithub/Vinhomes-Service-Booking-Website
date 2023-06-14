import { Redirect, Route } from "react-router-dom";
function Logout() {
    localStorage.removeItem("accessToken")
    return <Redirect to="/" />;
};
export default Logout