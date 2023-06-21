import React from 'react';

function CandyCard({ name, description, price, image }) {
  const handleBuy = () => {
    // Lógica para realizar la compra
    console.log(`Has comprado ${name}`);
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 p-4">
      <div className="w-60 h-80 mx-auto rounded overflow-hidden shadow-lg bg-white dark:bg-black dark:shadow-gray-700 transform hover:scale-105 transition-transform duration-300 flex flex-col">
        <div className="flex justify-center items-center h-40">
          <img src={image} alt={name} className="w-24 h-24 object-cover" />
        </div>
        <div className="px-4 py-2 flex-grow">
          <div className="font-bold text-sm mb-1 text-gray-700 dark:text-white">{name}</div>
          <p className="text-gray-700 text-xs dark:text-gray-300">{description}</p>
        </div>
        <div className="px-4 py-3 mb-3 flex justify-between items-end">
          <span className="inline-block bg-gray-200 dark:bg-white rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-black">
            ${price}
          </span>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs"
            onClick={handleBuy}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CandyCard;
