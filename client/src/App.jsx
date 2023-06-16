import axios from "axios";
import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div className="w-full min-w-[1280px] h-full min-h-screen bg-white dark:bg-black flex flex-col">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/cinePlus" element={<CinePlus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error404 />} /> //Esta ruta tiene que estar
        renderizada SI o SI al final
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
