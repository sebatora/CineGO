import axios from "axios";
import { useEffect, useState } from "react";

const Filter = () => {
	const [orderData, setOrderData] = useState({
		order: "",
		genre: "",
		clasification: "",
	});
	const [genres, setGenres] = useState([]);
	const [active, setActive] = useState(false);

	console.log(orderData);

	const fetchGenres = async () => {
		const { data } = await axios.get("/genres");
		setGenres(data);
	}

	useEffect(() => {
		fetchGenres();
	}, []);

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
			await axios.post("/order", orderData);
			setOrderData({
				order: "",
				clasification: "",
				genre: "",
			});
			setActive(false);
		} catch (error) {
			alert(error);
		}
	}

	return (
		<div className="w-full flex">
			<button className="bg-transparent rounded-lg border border-black dark:border-white px-4 ml-10 dark:text-white" onClick={() => setActive(true)}>Filter</button>
			
			<div className={`fixed inset-0 m-48 overflow-hidden bg-black z-10 ${active ? "flex" : "hidden"}`}>
				<button className="bg-red-500 absolute right-0 rounded-full px-2 m-2" onClick={() => setActive(false)}>X</button>
				<select className="w-3/4 h-10 my-16 mx-6" name="order" onChange={handleChangeOrder} defaultValue="order">
					<option value="order" disabled>Orden</option>
					<option value="ascending">A to Z</option>
					<option value="descending">Z to A</option>
					<option value="most recent">Más Reciente</option>
					<option value="oldest">Más Antiguo</option>
				</select>
				<select className="w-3/4 h-10 my-16 mx-6" name="clasification" onChange={handleChangeClasification} defaultValue="clasification">
					<option value="clasification" disabled>Clasificación</option>
					<option value="ATP">ATP</option>
					<option value="+13">+13</option>
					<option value="+16">+16</option>
				</select>
				<select className="w-3/4 h-10 my-16 mx-6" name="genre" onChange={handleChangeGenre} defaultValue="genre">
					<option value="genre" disabled>Género</option>
					<option value="allGenres">Todos los géneros</option>
					{genres.map(genre => (
						<option key={genre.id} value={genre.name}>{genre.name}</option>
					))}
				</select>
				<button className="bg-green-600 absolute bottom-4 right-1/2 rounded-sm p-2" onClick={handleFilter}>Filtrar</button>
			</div>
		</div>
	)
}

export default Filter