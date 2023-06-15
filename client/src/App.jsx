import "./App.css";
import Home from "./components/Home/Home"
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import CinePlus from "./components/cinePlus/cinePlus";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Forms/Login";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import Error404 from "./components/Error404/Error404";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/about" element={<About />} />

        <Route path="/cinePlus" element={<CinePlus />} />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Error404/> } /> //Esta ruta tiene que estar renderizada SI o SI al final
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
