import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Ticket from "../Ticket/Ticket";
import Cart from "../Cart/Cart";
import { addCart, removeAllCart, removeOneCart } from "../../redux/actions";


const TicketContainer = () => {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const dispatch = useDispatch()
  const product = useSelector((state)=> state.productTicket);
  const cart = useSelector((state)=>state.cart);
  const movieIds = useSelector((state)=> state.movieByIdCopy);
  
  const cinefan = product.filter(name => name.name === "cineFan")
  const general = product.filter(name => name.name === "general")

  const addToCard = (name) =>{ 
    dispatch(addCart(name))
  }

  const delRemoveCart = (name, all = false) => {
    if (all) {
      dispatch(removeAllCart(name))
    }
    else{
      dispatch(removeOneCart(name))
    }
  }

  let subtotal = cart.reduce((acc, el) => acc + el.price, 0);

  let servicio = subtotal * 0.10;

  let total = subtotal + servicio;

  return (
      <div className="mt-16 flex">
          <div className="w-2/3 flex flex-col">
            <div className="pl-10 py-6 bg-light-200 dark:bg-dark-700">
              <h3>Hola {userData.firstName} {userData.lastName}!!!</h3>
            </div>
            <div className="flex items-center justify-center mt-20" >
                <div className="w-full flex flex-col items-center">
                    <h4 className="mb-4">Sumate a cineFan</h4>
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
                <div className="w-full flex flex-col items-center">
                    <h4 className="mb-4">General</h4>
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
          
          <div className="w-1/3 mt-6 mb-10 flex flex-col items-center">
              <div className="w-80 mx-auto rounded overflow-hidden shadow-lg bg-gray-50 dark:bg-black dark:shadow-gray-700 flex flex-col ">
                  {/* <p className=" px-2 py-2 font-bold text-xl text-gray-700 dark:text-gray-300">Carrito</p> */}
                  <img src={movieIds.image} alt={movieIds.title} className="w-48 h-full my-4 object-cover mx-auto block rounded"/>
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
                    <div className="px-2 pt-2 font-bold text-sm mb-1 text-gray-700 dark:text-white">Subtotal: $ {subtotal}</div>
                    <div className="px-2 font-bold text-sm mb-1 text-gray-700 dark:text-white">Cargos por servicio de entradas: $ {servicio} </div>
                    <div className="px-2 font-bold text-lg mb-1 text-gray-700 dark:text-white">
                      <p>TOTAL: $ {total}</p>
                    </div>
                  </div>
                  <Link to="/login" >
                    <button className="w-80 btn-blue text-white font-bold py-3 px-10 rounded text-xs">Siguiente</button>
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default TicketContainer;