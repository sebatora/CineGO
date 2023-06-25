import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

// axios.defaults.baseURL = "https://cinego-production.up.railway.app";
axios.defaults.baseURL = "http://localhost:3001";

// Components
import About from "./components/About/About";
import CinePlusContainer from "./components/CinePlusContainer/CinePlusContainer";
import CreateUser from "./components/CreateUserForm/CreateUser";
import Detail from "./components/Detail/Detail";
import Error404 from "./components/Error404/Error404";
import FaQ from "./components/FaQ/FaQ";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/LoginForm/Login";
import Navbar from "./components/Navbar/Navbar";
import PaymentFailure from "./components/PaymentFailure/PaymentFailure";
import PaymentSuccess from "./components/PaymentSuccess/PaymentSuccess";
import TicketContainer from "./components/TicketContainer/TicketContainer";
import Candy from "./pages/Candy/Candy";
import Profile from "./pages/Profile/Profile";

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(
    window.localStorage.getItem("color-theme") || "light"
  );
  const userData = useSelector((state) => state.userData);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("color-theme", theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [location]);

  return (
    <div className="w-full h-full min-h-screen bg-light-100 dark:bg-dark-950 flex flex-col">
      <AuthProvider>
        <Navbar theme={theme} setTheme={setTheme} userData={userData} />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
          <Route path="/cinePlus" element={<CinePlusContainer />} />
          <Route path="/login" element={<Login theme={theme}/>} />
          <Route path="/CreateUser" element={<CreateUser theme={theme}/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/candy" element={<Candy />} />
          <Route path="/ticket" element={<TicketContainer />} />
          <Route path="/payment_success" element={<PaymentSuccess />} />
          <Route path="/payment_failure" element={<PaymentFailure />} />
          <Route path="/faq" element={<FaQ />} />
          <Route path="*" element={<Error404 />} /> //Esta ruta tiene que estar renderizada SI o SI al final
        </Routes>

        <Footer theme={theme} />
      </AuthProvider>
    </div>
  );
}

export default App;

