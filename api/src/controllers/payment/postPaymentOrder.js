const { mercadopago } = require("../../utils/mercadoPago");

const postPaymentOrder = async (cart) => {
		const items = cart.map(item => ({
			title: item.name,
			description: item.description || "",
			picture_url: item.image,
			currency_id: "ARS",
			quantity: Number(item.count),
			unit_price: Number(item.price) / Number(item.count),
		}));
		const response = await mercadopago.preferences.create({
			items,
			payer: {
				name: "Noe",
				surname: "Gomez",
				email: "noegomez@gmail.com",
				date_created: "2023-06-30"
			},
			back_urls: {
				success: "https://cine-go-ten.vercel.app/payment_success",
				failure: "https://cine-go-ten.vercel.app/payment_failure",
<<<<<<< HEAD:api/src/controllers/payment/postPaymentOrder.js
				// success: "http://localhost:3000/payment_success",
				// failure: "http://localhost:3000/payment_failure",
=======
>>>>>>> d4969232f78ff0a7a1cf24cb85e029f14d3d1ad1:api/src/controllers/postPaymentOrder.js
				pending: "",
			},
			auto_return: "approved",
		});

		if(!response) throw new Error("Error al crear orden");

		return response.body;
}

module.exports = postPaymentOrder;