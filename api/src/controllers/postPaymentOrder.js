const { mercadopago } = require("../utils/mercadoPago");

const postPaymentOrder = async () => {
		const response = await mercadopago.preferences.create({
			items: [
				{
					title: "Ticket Spiderman",
					description: "Entrada a spiderman para la función 3 a las 21hs",
					picture_url: "https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
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
				success: "http://localhost:3000/payment_success",
				failure: "http://localhost:3000/payment_failure",
				pending: "",
			},
			auto_return: "approved",
		});

		if(!response) throw new Error("Error al crear orden");

		return response.body.init_point;
}

module.exports = postPaymentOrder;