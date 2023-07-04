const { mercadopago } = require("../../utils/mercadoPago");

const postSubscription = async ({ subscription, userData }) => {
  const response = await mercadopago.preferences.create({
    items: [
      {
        title: subscription.type,
        currency_id: "ARS",
        quantity: 1,
        unit_price: Number(subscription.price),
      },
    ],
    payer: {
      name: userData.firstName,
      surname: userData.lastName,
      email: userData.email,
    },
    back_urls: {

      /* 		success: "https://cine-go-ten.vercel.app/payment_success" || "http://localhost:3000/payment_success",
				failure: "https://cine-go-ten.vercel.app/payment_failure" || "http://localhost:3000/payment_failure", */
      success: "http://localhost:3000/payment_success",
      failure: "http://localhost:3000/payment_failure",

      pending: "",
    },
    auto_return: "approved",
  });

  if (!response) throw new Error("Error al crear orden");

  return response.body;
};

module.exports = postSubscription;
