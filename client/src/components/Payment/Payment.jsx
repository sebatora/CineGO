import axios from "axios";

const Payment = () => {
	const handleClick = async () => {
		try {
			const { data } = await axios.post("http://localhost:3001/payment");
			window.location.href = data;
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className='w-full p-10'>
			<h1>Confirmar Compra</h1>
			<button onClick={handleClick} className='bg-red-600 p-2 rounded-lg'>Comprar</button>
		</div>
	)
}

export default Payment