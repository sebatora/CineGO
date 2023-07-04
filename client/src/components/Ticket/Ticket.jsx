const Ticket = ({ id, name, price, description, image, addToCard }) => {
  return (
    <div className="w-72 h-60 mx-10 rounded shadow-lg bg-primary-50 dark:bg-dark-950 dark:shadow-gray-700 transform hover:scale-105 transition-transform duration-300 flex flex-col">
      <div className=" mt-4 flex justify-center items-center h-20">
        <img src={image} alt="imagen" className="w-96 h-16 object-cover" />
      </div>
      <div className="px-4 py-2 flex-grow">
        <p className="text-gray-700 text-sm dark:text-gray-300">
          {description}
        </p>
      </div>
      <div className="w-full p-4 flex justify-center items-center">
        <button
          className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold p-3 rounded text-xs"
          onClick={() => addToCard(name)}
        >
          ${price}
        </button>
      </div>
    </div>
  );
};

export default Ticket;
