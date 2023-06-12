import React from "react";
import style from "./Navbar.module.css"
import { Link } from "react-router-dom";
import cinego_blanco from "../../assets/cinego_blanco.png"
import cinego_negro from "../../assets/cinego_negro.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {

  return (
    <nav className={style.navContainer}>

      <div className={style.navLogo}>
        <Link to="/">
          {/* <img src={cinego_negro} alt="CineGO" /> */}
          <img src={cinego_blanco} alt="CineGO" />
        </Link>
      </div>

      <div className={style.navLinkContainer}>

        <Link to="/cineplus" className={style.navLink}>
          CinePlus
        </Link>

        <Link to="/about" className={style.navLink}>
          About
        </Link>

        <Link to="/login" className={style.navLink}>
          <AccountCircleIcon sx={{ fontSize: 25 }} />
        </Link>
      </div>

    </nav>
  )
}

export default Navbar