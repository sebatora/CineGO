import React from 'react'

function CandyCarrito() {

  const handleBuy = () => {
    // Lógica para realizar la compra
    console.log(`Has comprado`);
  };

  return (
    <div className="w-full mt-28 flex flex-col items-center ">
        <div className="w-60 h-80 mx-auto rounded overflow-hidden shadow-lg bg-white dark:bg-black dark:shadow-gray-700 flex flex-col">
            <div className="px-4 py-2 flex-grow">
                <p className="text-gray-700 text-xl dark:text-gray-300">Candy</p>
                <div className="font-bold text-sm mb-1 text-gray-700 dark:text-white">Productos seleccionados</div>

                <hr/>
                <div className="font-bold text-sm mb-1 text-gray-700 dark:text-white">Subtotal: </div>
                <div className="font-bold text-sm mb-1 text-gray-700 dark:text-white">Cargo por servicio candy: </div>
                <div className="font-bold text-sm mb-1 text-gray-700 dark:text-white"><strong>TOTAL: </strong></div>

                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs"
                  onClick={handleBuy}
                >
                  Comprar
                </button>

            </div>
        </div>
    </div>
  )
}

export default CandyCarrito;