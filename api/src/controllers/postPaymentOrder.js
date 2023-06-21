const { mercadopago } = require("../utils/mercadoPago");

const postPaymentOrder = async ({ title, description, picture_url }) => {
	try {
		const response = await mercadopago.preferences.create({
			items: [
				{
					title,
					description,
					picture_url,
					quantity: 2,
					currency_id: "ARS",
					unit_price: 11000,
				}
			],
			payer: {
				name: "Noe",
				surname: "Gomez",
				email: "noegomez@gmail.com",
				date_created: "2023-06-30"
			},
			back_urls: {
				success: "http://localhost:3001/payment/success",
				failure: "http://localhost:3001/payment/cancel",
				pending: "",
			},
			auto_return: "approved",
		});

		return { id: response.body.id };
	} catch (error) {
		throw new Error(error)		
	}
}

module.exports = postPaymentOrder;