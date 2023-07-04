const { mercadopago } = require("../../utils/mercadoPago");

const postPaymentOrder = async ({ cart, userData }) => {
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
				name: userData.firstName,
				surname: userData.lastName,
				email: userData.email,
			},
			back_urls: {
				success: "http://localhost:3000/payment_success",
				failure: "http://localhost:3000/payment_failure",
				// success: "https://cine-go-ten.vercel.app/payment_success",
				// failure: "https://cine-go-ten.vercel.app/payment_failure",
				pending: "",
			},
			auto_return: "approved",
		});

  if (!response) throw new Error("Error al crear orden");

  return response.body;
};

module.exports = postPaymentOrder;
