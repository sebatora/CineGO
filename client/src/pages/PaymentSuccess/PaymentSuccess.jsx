import { useEffect } from "react";
import PaymentSuccessImage from "../../assets/payment_success.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postPurchases } from "../../redux/actions";

const PaymentSuccess = () => {
  const purchase = JSON.parse(window.localStorage.getItem("orderPurchase"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postPurchases(purchase));
  }, []);

  return (
    <div className="w-full h-[80vh] flex mt-20">
      <div className="w-11/12 flex items-center justify-around mx-auto">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="mb-2">¡Felicidades!</h1>
          <h4>Tu compra se ha completado correctamente.</h4>
          <Link className="mt-6" to="/">
            <h3>Volver a la página principal</h3>
          </Link>
        </div>
        <div className="w-full">
          <img
            src={PaymentSuccessImage}
            alt="Imagen Compra"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
