import { useState } from "react";
import { Link } from "react-router-dom";
import cinego_blanco from "../../assets/cinego_blanco.png"
import cinego_negro from "../../assets/cinego_negro.png"
import ModalProfile from "../ModalProfile/ModalProfile";


const options = [
  { name: "Cartelera", to: "/" },
  { name: "Candy", to: "/candy" },
  { name: "CinePlus", to: "/cineplus" },
  // { name: "Sobre Nosotros", to: "/about" },
  // { name: "Preguntas Frecuentes", to: "/faq" },
]

function Navbar({ theme, setTheme }) {
  const [activeModal, setActiveModal] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const userData = JSON.parse(window.localStorage.getItem("user"));

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }
  return (
    <nav className="w-full h-20 fixed flex justify-between items-center bg-light-100 dark:bg-dark-950 z-40 shadow-md dark:shadow-white/50">
      <div className="w-full lg:w-80 lg:ml-4 order-1">
        <Link to="/">
          {theme === "dark" ? (
            <img className="w-40" src={cinego_blanco} alt="CineGO" />
          ) : (
            <img className="w-40" src={cinego_negro} alt="CineGO" />
          )}
        </Link>
      </div>

      {/* Botones */}
      <div className="w-3/4 h-full hidden lg:flex justify-center items-center mt-2 space-x-10 order-2">
        {options.map((option, index) => (
          <Link className="hover:opacity-80" key={index} to={option.to}>
            <h4>{option.name}</h4>
          </Link>
        ))}
      </div>

      {/* Menu Responsive */}
      <div className="w-full h-full lg:hidden flex pl-6">
        {activeMenu ? (
          <button onClick={() => setActiveMenu(!activeMenu)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6 stroke-black dark:stroke-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        ) : (
          <button onClick={() => setActiveMenu(!activeMenu)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-7 h-7 stroke-black dark:stroke-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        )}
      </div>

      <div className="w-20 lg:w-1/4 h-full flex justify-end items-center mr-8 mt-2 order-2">
        <div className="mx-4 flex justify-center">
          {!userData || Object.entries(userData).length === 0 ? (
            <Link className="border p-2 rounded-lg" to="/login">
              <span>Sign In</span>
            </Link>
          ) : (
            <button className="bg-white rounded-full p-1" onClick={() => setActiveModal(!activeModal)}>
              <img className="w-7 rounded-full" src={userData.image} alt={userData.firstName} />
            </button>
          )}
          {activeModal && (
            <ModalProfile setActiveModal={setActiveModal} userData={userData} />
          )}
        </div>

        {/* Toogle Theme */}
        <button onClick={toggleTheme} className={theme === "light" ? "block" : "hidden"}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6 stroke-yellow-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        </button>
        <button onClick={toggleTheme} className={theme === "dark" ? "block" : "hidden"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-blue-800">
            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar