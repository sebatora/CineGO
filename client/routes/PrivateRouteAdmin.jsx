import { Navigate } from "react-router-dom" ;

const PrivateRouteAdmin = ({ children }) => {
	const userData = JSON.parse(window.localStorage.getItem("user"));

	return userData?.isAdmin ? children : <Navigate to="/" />
}

export default PrivateRouteAdmin