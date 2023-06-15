import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterOrder, getMovies } from "../../redux/actions";

const Filter = () => {

	const dispatch = useDispatch();

	const [active, setActive] = useState(false);
	
	const allGenres = useSelector((state) => state.allGenres)

	const [orderData, setOrderData] = useState({
		order: "",
		filterGenre: "",
		filterClasification: "",
	});

	const handleChangeOrder = event => {
		const { name, value } = event.target;
		setOrderData({ ...orderData, [name]: value });
	}

	const handleChangeClasification = event => {
		const { name, value } = event.target;
		setOrderData({ ...orderData, [name]: value });
	}

	const handleChangeGenre = event => {
		const { name, value } = event.target;
		setOrderData({ ...orderData, [name]: value });
	}

	const handleFilter = async event => {
		event.preventDefault();
		try {
			dispatch(filterOrder(orderData))

			setActive(false);
		} catch (error) {
			alert(error);
		}
	}

	const handleReset = () => {
		dispatch(getMovies())
	}

	return (
		<div className="w-full ml-28">
			<button className="bg-white rounded-md px-4 ml-10" onClick={() => setActive(true)}>Filter</button>
			
			<div className={`fixed inset-0 m-48 overflow-hidden bg-black z-10 ${active ? "flex" : "hidden"}`}>
				<button className="bg-red-500 absolute right-0 rounded-full px-2 m-2" onClick={() => setActive(false)}>X</button>
				<select className="w-3/4 h-10 my-16 mx-6" name="order" onChange={handleChangeOrder} defaultValue="order">
					<option value="order" disabled>Orden</option>
					<option value="ascending">A to Z</option>
					<option value="descending">Z to A</option>
					<option value="most recent">Más Reciente</option>
					<option value="oldest">Más Antiguo</option>
				</select>
				<select className="w-3/4 h-10 my-16 mx-6" name="filterClasification" onChange={handleChangeClasification} defaultValue="clasification">
					<option value="clasification" disabled>Clasificación</option>
					<option value="ATP">ATP</option>
					<option value="+13">+13</option>
					<option value="+16">+16</option>
				</select>
				<select className="w-3/4 h-10 my-16 mx-6" name="filterGenre" onChange={handleChangeGenre} defaultValue="genre">
					<option value="genre" disabled>Género</option>
					<option value="allGenres">Todos los géneros</option>
					{allGenres.map(genre => (
						<option key={genre.id} value={genre.name}>{genre.name}</option>
					))}
				</select>
				<button className="bg-green-600 absolute bottom-4 right-1/2 rounded-sm p-2" onClick={handleFilter}>Filtrar</button>
			</div>
			<button className="bg-white rounded-md px-4 ml-10" onClick={handleReset}>RESET</button>
		</div>
	)
}

export default Filter