import { GoTrash } from "react-icons/go";

const Cart = ({ name, price, id, count, delRemoveCart, addToCard }) => {
    return (
      <div className="flex items-start border-b pb-0">
        <div className="flex items-center">
          <button
            onClick={() => delRemoveCart(name, true)}
            className="rounded-full h-6 w-6 mr-3 ml-1 mt-1 bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 font-semibold transition-colors duration-300"
          >
            <GoTrash className="text-xl mx-1" />
          </button>
          <div className="mr-2 mt-2 text-sm font-bold text-gray-700 dark:text-white">
            {count} {name}
          </div>
        </div>
        <div className="flex items-center ml-auto">
          <p className="mr-2 mt-2 text-sm font-bold text-gray-700 dark:text-white">$ {price}</p>
          <button
            onClick={() => delRemoveCart(name)}
            className="rounded-full h-6 w-6 mr-2 mt-2 bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 font-semibold transition-colors duration-300"
          >
            -
          </button>
          <button
            onClick={() => addToCard(name)}
            className="rounded-full h-6 w-6 mr-2 mt-2 bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 font-semibold transition-colors duration-300"
          >
            +
          </button>
        </div>
      </div>
    );
  };
  
  export default Cart;
  