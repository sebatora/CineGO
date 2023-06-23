import { Link } from "react-router-dom";
import PaymentError from "../../assets/payment_error.png";

const PaymentFailure = () => {
	return (
		<div className="w-full flex mt-20">
			<div className="w-full flex flex-col justify-center items-center">
				<h1>Oh no!</h1>
				<p>Ha ocurrido un error en el pago.</p>
				<Link className="mt-6" to="/">
					<h3 className="border-b-4">Volver a la página principal</h3>
				</Link>
			</div>
			<div className="w-full">
				<img src={PaymentError} alt="Imagen Error" />
			</div>
		</div>
	)
}

export default PaymentFailure