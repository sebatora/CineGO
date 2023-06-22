import { Wallet } from '@mercadopago/sdk-react';

const Payment = () => {

	return (
		<div className='w-full p-10'>
			<h1>Confirmar Compra</h1>
			{preferenceId ? <Wallet initialization={{ preferenceId: preferenceId }} /> : null}
		</div>
	)
}

export default Payment