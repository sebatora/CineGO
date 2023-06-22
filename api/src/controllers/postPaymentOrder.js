const { mercadopago } = require("../utils/mercadoPago");

const postPaymentOrder = async (cart) => {
		const items = cart.map(item => ({
			title: item.name,
			description: item.description,
			picture_url: item.image,
			currency_id: "ARS",
			unit_price: item.price,
		}));
		console.log(items);
		// const response = await mercadopago.preferences.create({
		// 	items,
		// 	payer: {
		// 		name: "Noe",
		// 		surname: "Gomez",
		// 		email: "noegomez@gmail.com",
		// 		date_created: "2023-06-30"
		// 	},
		// 	back_urls: {
		// 		success: "http://localhost:3000/payment_success",
		// 		failure: "http://localhost:3000/payment_failure",
		// 		pending: "",
		// 	},
		// 	auto_return: "approved",
		// });

		// if(!response) throw new Error("Error al crear orden");

		// return response.body.init_point;
}

module.exports = postPaymentOrder;