const { mercadopago } = require("../../utils/mercadoPago");

const postSubscription = async (subscription) => {
	const response = await mercadopago.preapproval.create({
		reason: subscription.type,
		auto_recurring: {
			frequency: 1,
			frequency_type: "months",
			transaction_amount: subscription.price,
			currency_id: "ARS"
		},
		back_url: "https://cine-go-ten.vercel.app/payment_success",
		payer_email: "test_user_378129027@testuser.com",
		status: "pending",
	});

	if(!response) throw new Error("Error al crear orden");

	return response.body;
}

module.exports = postSubscription;