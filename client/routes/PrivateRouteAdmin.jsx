import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom" ;

const PrivateRouteAdmin = ({ children }) => {
	const userData = useSelector(state => state.userData);

	// return userData?.isAdmin ? children : <Navigate to="/" />
	return children
}

export default PrivateRouteAdmin