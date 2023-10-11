import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user"));

    return user?.isSeller === true ? children : <Navigate to="/" />;
};

export default Private;