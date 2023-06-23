import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartCandy, removeAllCartCandy, removeOneCartCandy } from "../../redux/actions";

function CandyCarrito() {

  const cart = useSelector((state) => state.cart)

  const addCart = (name) => {
    dispatch(addCartCandy(name));
  };


  return (
    <div className="w-1/3 mt-28 flex flex-col items-center ">
      <div className="w-80 mx-auto rounded overflow-hidden shadow-lg bg-white dark:bg-black dark:shadow-gray-700 flex flex-col">
        <p className=" px-2 py-2 font-bold text-2xl text-gray-700 dark:text-gray-300">
          Candy
        </p>
        <div className=" px-2 py-1 font-bold text-lg mb-1 text-gray-700 dark:text-white">
          Productos seleccionados:{" "}
        </div>
        <div className="px-2 py1">
          {cart?.map((item, index) => (
            <div key={index}>
              <p className="text-sm font-bold  text-gray-700 dark:text-white">
                {" "}
                {item.count} {item.name} : {item.price}
              </p>
              <button onClick={() => delRemoveCart(item.name, true)}> X </button>
              <button onClick={() => delRemoveCart(item.name)}> - </button>
              <button onClick={() => addCart(item.name)}> + </button>
            </div>
          ))}
        </div>
        <hr />
        <div className=" px-2 pt-2 font-bold text-sm mb-1 text-gray-700 dark:text-white">
          Subtotal:{" "}
        </div>
        <div className=" px-2 font-bold text-sm mb-1 text-gray-700 dark:text-white">
          Cargo por servicio candy:{" "}
        </div>
        <div className=" px-2 font-bold text-lg mb-1 text-gray-700 dark:text-white">
          <strong>TOTAL: {total} </strong>
        </div>

                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs"
                  onClick={handlePay}
                >
                  Comprar
                </button>

          
        </div>
    </div>
  );
}

export default CandyCarrito;
