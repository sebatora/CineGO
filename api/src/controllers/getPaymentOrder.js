const { mercadopago } = require("../utils/mercadoPago");

const getPaymentOrder = () => {
	const response = mercadopago.payment.capture(1);
	return response;
}

module.exports = getPaymentOrder;