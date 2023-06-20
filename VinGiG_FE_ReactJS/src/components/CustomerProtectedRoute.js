import { Redirect, Route } from "react-router-dom";
import React from "react"

function CustomerProtectedRoute(props) {
    if (localStorage.getItem("accessToken") && JSON.parse(localStorage.getItem("accessToken")).role == 'customer') {
        return <Route {...props} />
    }
    return <Redirect to="/login" />;
};

export default CustomerProtectedRoute;
