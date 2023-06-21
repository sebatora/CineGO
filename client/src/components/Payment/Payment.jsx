import axios from 'axios';
import { useState } from 'react';
import { Wallet } from '@mercadopago/sdk-react';

const Payment = () => {
	const [preferenceId, setPreferenceId] = useState();

	let data = {
		title: "Ticket Spiderman",
		description: "Entrada a spiderman para la función 3 a las 21hs",
		picture_url: "https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
	}

	const handleClick = async () => {
		try {
			const response = await axios.post("http://localhost:3001/payment", data);
			setPreferenceId(response.data.id);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className='absolute bottom-0'>
			<button className='z-20 bg-orange-500 p-20' onClick={handleClick}>Click</button>
			{preferenceId ? <Wallet initialization={{ preferenceId: preferenceId }} /> : null}
		</div>
	)
}

export default Payment