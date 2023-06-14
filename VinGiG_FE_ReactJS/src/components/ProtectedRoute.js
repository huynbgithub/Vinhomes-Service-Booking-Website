import { Redirect, Route } from "react-router-dom";
// import useAuth from 'use-auth';

const ProtectedRoute = props => {

    if (!localStorage.getItem("accessToken")) {
        return <Redirect to="/login" />;
    }

    return <Route {...props} />
};

export default ProtectedRoute;