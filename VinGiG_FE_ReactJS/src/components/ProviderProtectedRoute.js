import { Redirect, Route } from "react-router-dom";
import React from "react"

function ProviderProtectedRoute(props) {
    if (localStorage.getItem("accessToken") && JSON.parse(localStorage.getItem("accessToken")).role == 'provider') {
        return <Route {...props} />
    }
    return <Redirect to="/login" />;
};

export default ProviderProtectedRoute;
