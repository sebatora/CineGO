const Ticket = ({ id, name, price, description, image, addToCard}) => {

    return(
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 p-4 my-2 mx-16">
            <div className="w-72 h-60 mx-10 rounded overflow-hidden shadow-lg bg-gray-50 dark:bg-black dark:shadow-gray-700 transform hover:scale-105 transition-transform duration-300 flex flex-col">
                <div className=" mt-4 flex justify-center items-center h-20">
                    <img src={image} alt="imagen" className="w-96 h-16 object-cover"/>
                </div>
                <div className="px-4 py-2 flex-grow">
                    <p className="text-gray-700 text-sm dark:text-gray-300">{description}</p>
                </div>
                    <button className="btn-blue text-white font-bold py-4 px-4 rounded text-xs" onClick={()=>addToCard(name)}>${price}</button>
            </div>
        </div>
    )
}

export default Ticket