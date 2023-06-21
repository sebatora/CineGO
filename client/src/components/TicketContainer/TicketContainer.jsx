import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Ticket from "../Ticket/Ticket";
import styles from "./TicketContainer.module.css"
import Cart from "../Cart/Cart";
import { addCart } from "../../redux/actions";
import CartTotal from "../CartTotal/CartTotal";


const TicketContainer = () =>{

    const dispatch = useDispatch()
    const product = useSelector((state)=> state.productTicket)
    const cart = useSelector((state)=>state.cart)
    const  movieId = useSelector((state) => state.movieById)

    const cinefan = product.filter(name => name.name === "cineFan")
    const general = product.filter(name => name.name === "general")

    const addToCard = (id) =>{ 
        dispatch(addCart(id))
    }

    return (
        <div className={styles.container}>
            <div style={{backgroundColor: "black",  padding: "20px"}}>
                <Link to="/"><button className={styles.button}>Volver</button></Link>
            </div>
            <div className={styles.cart}>
                <h3>Carrito</h3>
                <img src={movieId.image} alt={movieId.name} />
                <h2>{movieId.name}</h2>
                {cart?.map((item, index)=>(
                        <Cart 
                        key={index}
                        id={item.id}
                        price={item.price}
                        name={item.name}
                        />
                    ))}   
                <h3>Total: <CartTotal/> </h3>
                <br />
                <Link to="/login"><button className={styles.button}>Seguiente</button></Link>
            </div>
            <div>
                <h2>Hola -nombre del usuario- </h2>
            </div>
            <div className={styles.cards}>
                <h3><b>SUMARSE A CINEFAN</b></h3>
                <div>
                    {cinefan?.map(({id, name, description, price, image}) =>(
                        <Ticket 
                        key={id}
                        id={id}
                        name={name} 
                        description={description} price={price}
                        image={image}
                        addToCard={addToCard}
                        />
                    ))
                    }
                </div>
                <h3><b>GENERAL</b></h3>
                <div>
                    {general?.map(({id, name, description, price, image}) =>(
                        <Ticket 
                        key={id} 
                        id={id}
                        name={name} 
                        description={description} price={price}
                        image={image}
                        addToCard={addToCard}
                        />)
                        )
                    }
                </div>
            </div>
            
        </div>
    )
}

export default TicketContainer;