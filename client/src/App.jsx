import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3001";

// Components
import About from "./components/About/About";
import CreateUser from "./components/CreateUserForm/CreateUser";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
import Login from "./components/LoginForm/Login";
import Navbar from "./components/Navbar/Navbar";
import CinePlus from "./components/cinePlus/cinePlus";
import Error404 from "./components/Error404/Error404";
import Footer from "./components/Footer/Footer";
import Profile from "./view/Profile/Profile";
import { AuthProvider } from "./context/authContext";
import ChangeMail from "./view/ChangeMail/ChangeMail";
import Record from "./view/Record/Record";
import Candy from "./view/Candy/Candy";
import Ticket from "./components/Ticket/Ticket";


import { useSelector } from "react-redux";


function App() {
  const [theme, setTheme] = useState(window.localStorage.getItem("color-theme") || "light");
  const location = useLocation();
  const userData = useSelector(state => state.userData);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("color-theme", theme);
  }, [theme]);

  return (
    <div className="w-full h-full min-h-screen bg-white dark:bg-black flex flex-col">
      <AuthProvider>
      {location.pathname !== "/login" && location.pathname !== "/createUser" && location.pathname !== "/ticket" && <Navbar theme={theme} setTheme={setTheme} userData={userData} />}

      <Routes>
        <Route exact path="/" element={<Home theme={theme} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/cinePlus" element={<CinePlus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changeMail" element={<ChangeMail />} />
        <Route path="/record" element={<Record />} />
        <Route path="/candy" element={<Candy />} />
        <Route path="/ticket" element={<Ticket/>}/>
        <Route path="*" element={<Error404 />} /> //Esta ruta tiene que estar renderizada SI o SI al final
      </Routes>

      {location.pathname !== "/login" && location.pathname !== "/createUser" && <Footer theme={theme} />}
      </AuthProvider>
    </div>
  );
}

export default App;
