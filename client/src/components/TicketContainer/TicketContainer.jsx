import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Ticket from "../Ticket/Ticket";
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

    let subtotal = cart.reduce((acc, el) => acc + el.price, 0);

    let servicio = subtotal * 0.10;

    let total = subtotal + servicio;

    return (
        <div className="mt-16 flex">
            
            {/* <div className=" px-2 pt-4 font-bold text-2xl text-gray-700 dark:text-gray-300">
                <h3>Hola -nombre del usuario- </h3>
            </div> */}
            <div className="w-2/3 mt-16 flex items-center" >
                <div>
                    <h4 className="mx-40"><b>Sumate a cineFan</b></h4>
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
                <div>
                    <h4 className="mx-56"><b>General</b></h4>
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
            
            <div className="w-1/3 mt-16 flex flex-col items-center">
                <div className="w-80 mx-auto rounded overflow-hidden shadow-lg bg-gray-50 dark:bg-black dark:shadow-gray-700 flex flex-col ">
                    {/* <p className=" px-2 py-2 font-bold text-xl text-gray-700 dark:text-gray-300">Carrito</p> */}
                    <img src={movieIds.image} alt={movieIds.name} className="w-48 h-full my-4 object-cover mx-auto block rounded"/>
                    <p className=" px-2 py-1 font-bold text-lg mb-1 text-gray-700 dark:text-white">{movieIds.title}</p>
                    <div className="px-2 py1">
                        <hr />
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

                    <div>
                        <div className=" px-2 pt-2 font-bold text-sm mb-1 text-gray-700 dark:text-white">Subtotal: $ {subtotal}</div>
                        <div className=" px-2 font-bold text-sm mb-1 text-gray-700 dark:text-white">Cargos por servicio de entradas: $ {servicio} </div>
                        <div className=" px-2 font-bold text-lg mb-1 text-gray-700 dark:text-white">
                            <strong>TOTAL: $ {total}</strong>
                        </div>
                    </div>
                    <Link to="/login"  ><button className="w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded text-xs">Seguiente</button></Link>
                </div>
            </div>
        </div>
    )
}

export default TicketContainer;