import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import {
  GoogleAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider).then((response) =>
        console.log(response)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    signOut(auth);
  };

  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      if (result !== null) {
        const firstName = result.user.displayName.split(" ")[0];
        const lastName = result.user.displayName.split(" ")[1];
        const token = result.user.accessToken;
        const userData = {
          firstName,
          lastName,
          email: result.user.email,
          image: result.user.photoURL,
          token: token.substring(0, 60),
        };
        setUser(userData);
        dispatch(loginUser(userData));
        navigate("/");
      }
    });
  }, []);

  return (
    <authContext.Provider
      value={{ user, loginWithGoogle, logout, loading, setLoading }}
    >
      {children}
    </authContext.Provider>
  );
};
