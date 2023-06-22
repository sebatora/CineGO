import React from 'react'
import { useSelector } from 'react-redux';

function CandyCarrito() {

  const cart = useSelector((state) => state.cart)

  let total = cart.reduce((acc, el) => acc + el.price, 0)


  return (
    <div className="w-1/3 mt-28 flex flex-col items-center ">
        <div className="w-60 mx-auto rounded overflow-hidden shadow-lg bg-white dark:bg-black dark:shadow-gray-700 flex flex-col">
        
                <p className="text-gray-700 text-xl dark:text-gray-300">Candy</p>
                <div className="font-bold text-sm mb-1 text-gray-700 dark:text-white">Productos seleccionados</div>
                <div>
                  {cart?.map((item, index)=>(
                        <div key={index}> 
                          <h3>{item.name}</h3>
                          <h3>{item.price}</h3>
                        </div>
                  ))}

                </div>
                <hr/>
                <div className="font-bold text-sm mb-1 text-gray-700 dark:text-white">Subtotal: </div>
                <div className="font-bold text-sm mb-1 text-gray-700 dark:text-white">Cargo por servicio candy: </div>
                <div className="font-bold text-sm mb-1 text-gray-700 dark:text-white"><strong>TOTAL: {total} </strong></div>

                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs"
                >
                  Comprar
                </button>

          
        </div>
    </div>
  )
}

export default CandyCarrito;