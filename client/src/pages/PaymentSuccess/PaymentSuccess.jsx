import PaymentSuccessImage from "../../assets/payment_success.png";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
	return (
		<div className="w-full flex mt-20">
			<div className="w-full flex flex-col justify-center items-center">
				<h1 className="mb-2">Felicidades!!!</h1>
				<h4>Tu compra se ha completado correctamente.</h4>
				<Link className="mt-6" to="/">
					<h3>Volver a la página principal</h3>
				</Link>
			</div>
			<div className="w-full">
				<img src={PaymentSuccessImage} alt="Imagen Compra" />
			</div>
		</div>
	)
}

export default PaymentSuccess