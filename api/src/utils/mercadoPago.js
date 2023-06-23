const mercadopago = require("mercadopago");

mercadopago.configure({
	access_token: process.env.ACCESS_TOKEN,
});

module.exports = {
	mercadopago
};