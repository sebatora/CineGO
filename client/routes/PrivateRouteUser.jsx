import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouteUser = ({ children }) => {
	const userData = useSelector(state => state.userData);

	return !userData ? children : <Navigate to="/login" />
}

export default PrivateRouteUser