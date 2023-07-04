import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

// axios.defaults.baseURL = "https://cinego-production.up.railway.app";
axios.defaults.baseURL = "http://localhost:3001";

// Components
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

// Private Routes
import PrivateRouteUser from "../routes/PrivateRouteUser";
import PrivateRouteAdmin from "../routes/PrivateRouteAdmin";

// Pages
import About from "./pages/About/About";
import CinePlusContainer from "./pages/CinePlusContainer/CinePlusContainer";
import CreateUser from "./pages/CreateUserForm/CreateUser";
import Detail from "./pages/Detail/Detail";
import Error404 from "./pages/Error404/Error404";
import FaQ from "./pages/FaQ/FaQ";
import Home from "./pages/Home/Home";
import Login from "./pages/LoginForm/Login";
import PaymentFailure from "./pages/PaymentFailure/PaymentFailure";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
import TicketContainer from "./pages/TicketContainer/TicketContainer";
import Candy from "./pages/CandyContainer/CandyContainer";
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import Contact from "./pages/Contact/Contact";
import Resetpassword from "./pages/ResetPassForm/Resetpassword";

function App() {
  const navigate = useNavigate();
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
      behavior: "smooth",
    });
    if (location.pathname !== "/payment_success") {
      window.localStorage.removeItem("orderPurchase");
    }
  }, [location]);

  return (
    <div className="w-full h-full min-h-screen bg-light-100 dark:bg-dark-950 flex flex-col">
      <AuthProvider>
        {location.pathname !== "/dashboard" && (
          <Navbar theme={theme} setTheme={setTheme} userData={userData} />
        )}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
          <Route path="/cinePlus" element={<CinePlusContainer />} />
          <Route path="/login" element={<Login theme={theme} />} />
          <Route path="/createUser" element={<CreateUser theme={theme} />} />
          <Route
            path="/forgotPassword"
            element={<Resetpassword theme={theme} />}
          />
          <Route
            path="/profile"
            element={
              <PrivateRouteUser>
                <Profile />
              </PrivateRouteUser>
            }
          />
          <Route path="/candy" element={<Candy />} />
          <Route path="/ticket" element={<TicketContainer />} />
          <Route path="/payment_success" element={<PaymentSuccess />} />
          <Route path="/payment_failure" element={<PaymentFailure />} />
          <Route path="/faq" element={<FaQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRouteAdmin>
                <Dashboard />
              </PrivateRouteAdmin>
            }
          />
          <Route path="*" element={<Error404 />} /> //Esta ruta tiene que estar
          renderizada SI o SI al final
        </Routes>

        {location.pathname !== "/dashboard" && <Footer theme={theme} />}
      </AuthProvider>
    </div>
  );
}

export default App;
