import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions";

export const authContext = createContext();

export const useAuth = () => {
	const context = useContext(authContext);
	if(!context) throw new Error("There is not auth provider");
	return context;
}

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const loginWithGoogle = async () => {
		try {
			const provider = new GoogleAuthProvider();
			await signInWithRedirect(auth, provider);
		} catch (error) {
			console.error(error);
		}
	};

	const logout = () => {
		localStorage.removeItem("token");
		signOut(auth)
	};

	useEffect(() => {
		onAuthStateChanged(auth, currentUser => {
			if(currentUser !== null){
				const firstName = currentUser.displayName.split(" ")[0];
				const lastName = currentUser.displayName.split(" ")[1];
				const token = currentUser.accessToken;
				const userData = {
					firstName,
					lastName,
					email: currentUser.email,
					image: currentUser.photoURL,
					token: token.substring(0, 60),
				}
				setUser(userData);
				dispatch(loginUser(userData));
				navigate("/");
			}
		})
	}, []);

	return (
		<authContext.Provider value={{ user, loginWithGoogle, logout }}>
			{children}
		</authContext.Provider>
	)
}