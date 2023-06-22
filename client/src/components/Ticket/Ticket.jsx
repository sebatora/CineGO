import styles from "./Ticket.module.css";


const Ticket = ({ id, price, description, image, addToCard}) => {

    return(
        <div className={styles.container}>

            <div className={styles.card}>
                <div className={styles.cards}>
                    <button onClick={()=>addToCard(id)}>${price}</button>
                </div>
                <div className={styles.cards_body}>
                    <img src={image} alt="imagen" />
                    <p>{description}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Ticket