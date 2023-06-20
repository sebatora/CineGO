import { createContext, useContext, useEffect, useState } from "react";
import { app } from "../firebase/firebaseConfig";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, postUser } from "../redux/actions";

export const authContext = createContext();

export const useAuth = () => {
	const context = useContext(authContext);
	if(!context) throw new Error("There is not auth provider");
	return context;
}

export const AuthProvider = ({ children }) => {
	const auth = getAuth();
	const [user, setUser] = useState({});
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const loginWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	};

	const logout = () => signOut(auth);

	useEffect(() => {
		onAuthStateChanged(auth, currentUser => {
			if(currentUser !== null){
				const firstName = currentUser.displayName.split(" ")[0];
				const lastName = currentUser.displayName.split(" ")[1];
				const userData = {
					firstName,
					lastName,
					email: currentUser.email,
					image: currentUser.photoURL,
					token: currentUser.accessToken,
				}
				console.log(userData);
				// setUser(userData);
				// dispatch(postUser(userData));
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