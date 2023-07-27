import { Redirect, Route } from "react-router-dom";
import React from "react"

function AdminProtectedRoute(props) {
    if (localStorage.getItem("accessToken") && JSON.parse(localStorage.getItem("accessToken")).role == 'admin') {
        return <Route {...props} />
    }
    return <Redirect to="/login" />;
};

export default AdminProtectedRoute;
