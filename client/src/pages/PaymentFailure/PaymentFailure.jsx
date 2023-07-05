import { Link } from "react-router-dom";
import PaymentError from "../../assets/payment_error.png";

const PaymentFailure = () => {
  return (
    <div className="w-full h-[80vh] flex mt-20">
      <div className="w-11/12 flex items-center justify-around mx-auto">
        <div className="w-full flex flex-col justify-center items-center">
          <h1>¡Oh no!</h1>
          <h4>Ha ocurrido un error en el pago.</h4>
          <Link className="mt-6" to="/">
            <h3>Volver a la página principal</h3>
          </Link>
        </div>
        <div className="w-full">
          <img src={PaymentError} alt="Imagen Error" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default PaymentFailure;
