
import { Link } from "react-router-dom";
import styles from "./Ticket.module.css";


const Ticket = () => {

    const handlerbuy =()=>{
        // comprar ticket

        alert("compraste tu ticket")
    }
    return(
        <div className={styles.container}>
            <div style={{backgroundColor: "black", marginTop: "-50px", padding: "20px"}}>
                <Link to="/"><button className={styles.button}>Volver</button></Link>
                
            </div>
            <div className={styles.nex}>
                <Link to="/login">
                    <button >siguiente</button>
                </Link>
            </div>
            <div>
                <h2>Hola -nombre del usuario- </h2>
            </div>
            
            <div className={styles.name}>
                <h3><b>SUMARSE A CINEFAN</b></h3>
            </div>
            <div className={styles.card}>
                <div className={styles.cards}>
                    <button onClick={handlerbuy}>$180</button>
                </div>
                <div className={styles.cards_body}>
                    <img src="https://static.cinemarkhoyts.com.ar/Images/TicketTypeImage/1667.png" alt="imagen" />
                    <p>Incluye 2 entradas + Tarjeta Virtual.</p>
                </div>
            </div>
            <div className={styles.name}>
                <h3><b>GENERAL</b></h3>
            </div>
            <div className={styles.card}>
                <div className={styles.cards}>
                    <button onClick={handlerbuy}>$100</button>
                </div>
                <div className={styles.cards_body}>
                    <img src="https://static.cinemarkhoyts.com.ar/Images/TicketTypeImage/1687.png" alt="imagen" />
                    <p>Entrada Promocional No acumulable con otras promociones. Lunes y martes.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Ticket