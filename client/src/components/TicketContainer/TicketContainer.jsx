import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Ticket from "../Ticket/Ticket";
import styles from "./TicketContainer.module.css"
import Cart from "../Cart/Cart";
import { addCart, removeAllCart, removeOneCart } from "../../redux/actions";


const TicketContainer = () =>{
    const dispatch = useDispatch()
    const product = useSelector((state)=> state.productTicket)
    const cart = useSelector((state)=>state.cart)
    const movieIds = useSelector((state)=> state.movieByIdCopy)
    
    const cinefan = product.filter(name => name.name === "cineFan")
    const general = product.filter(name => name.name === "general")

    const addToCard = (id) =>{ 
        
        dispatch(addCart(id))
    }

    const delRemoveCart = (id, all = false) => {
        if (all) {
            dispatch(removeAllCart(id))
        }
        else{
            dispatch(removeOneCart(id))
        }
    }

    let total = cart.reduce((acc, el) => acc + el.price, 0)

    return (
        <div className={styles.container}>
            <div style={{backgroundColor: "black",  padding: "20px"}}>
                <Link to="/"><button className={styles.button}>Volver</button></Link>
            </div>
            <div className={styles.cart}>
                <h3>Carrito</h3>
                <img src={movieIds.image} alt={movieIds.name} />
                <p>{movieIds.title}</p>
                <div>
                    {cart?.map((item, index)=>(
                            <Cart 
                            key={index}
                            id={item.id}
                            price={item.price}
                            name={item.name}
                            count={item.count}
                            delRemoveCart={delRemoveCart}
                            addToCard={addToCard}
                            />
                        ))}   
                </div>
                <hr />
                <div>
                    <h4>Subtotal</h4>
                    <h4>cargos por entrada</h4>
                    <h4>total $ {total}</h4>
                </div>
                <hr />
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