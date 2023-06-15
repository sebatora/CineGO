import './App.css'
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import CinePlus from './components/cinePlus/cinePlus';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Forms/Login';
import CreateUser from './components/Forms/CreateUser';
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import Footer from './components/Footer/Footer';
axios.defaults.baseURL = "http://localhost:3001"

function App() {

  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route exact path="/" element={<Landing />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/about" element={<About />} />

        <Route path="/cinePlus" element={<CinePlus />} />

        <Route path="/login" element={<Login />} />

        <Route path="/CreateUser" element={<CreateUser />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App