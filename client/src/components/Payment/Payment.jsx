const Payment = () => {
	const handleClick = async () => {
		try {
			
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