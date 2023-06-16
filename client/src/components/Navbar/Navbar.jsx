import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cinego_blanco from "../../assets/cinego_blanco.png"
import cinego_negro from "../../assets/cinego_negro.png"
import ModalProfile from "../ModalProfile/ModalProfile";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("color-theme") || "light");
  const [activeModal, setActiveModal] = useState(false);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("color-theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	}
  return (
    <nav className="w-full h-20 fixed flex justify-between items-center bg-white dark:bg-black z-10 shadow-md dark:shadow-white/50">
      <div className="w-full ml-4">
        <Link to="/">
          {theme === "dark" ? (
            <img className="w-40" src={cinego_blanco} alt="CineGO" />
          ) : (
            <img className="w-40" src={cinego_negro} alt="CineGO" />
          )}
        </Link>
      </div>

      <div className="w-full flex justify-center space-x-10">
        <Link  to="/cineplus">
          <h4 className="hover:underline">CinePlus</h4>
        </Link>
      </div>

      

      <div className="w-20 lg:w-full flex justify-end mr-8 lg:order-1 order-0">
        <div className="mx-4 flex justify-center">
        <button onClick={() => setActiveModal(!activeModal)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6 h-6 stroke-black dark:stroke-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
        {activeModal && (
            <ModalProfile activeModal={activeModal} setActiveModal={setActiveModal} />
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