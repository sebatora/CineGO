const { Purchase, User, Show, Candy, Movie } = require("../../db");
const nodemailer = require("nodemailer");
const path = require("path");

const postPurchaseController = async (
  userId,
  items,
  totalPrice,
  orderNumber
) => {
  try {
    const purchase = await Purchase.create({ userId, totalPrice, orderNumber });
    const purchasedItems = [];

    // Iterar sobre los items comprados
    for (const item of items) {
      const { type, itemId, price, quantity, cinePlus } = item;
      let itemDetails;
      // Restar la cantidad comprada del stock correspondiente (Show o Candy)
      if (type === "show") {
        // El item es un Show
        const show = await Show.findByPk(itemId);
        const movie = await Movie.findByPk(itemId);
        show.stock -= quantity;
        await show.save();
        await purchase.addShow(show, { through: { price, quantity } });
        itemDetails = {
          id: show.id,
          name: movie.title,
          quantity,
          price,
          type,
        };
      } else if (type === "candy") {
        // El item es un Candy
        const candy = await Candy.findByPk(itemId);
        candy.stock -= quantity;
        await candy.save();
        await purchase.addCandy(candy, { through: { price, quantity } });
        itemDetails = {
          id: candy.id,
          name: candy.name,
          quantity,
          price,
          type,
        };
      } else if (type === "subscription") {
        const subscriptionUser = await User.findByPk(userId);
        subscriptionUser.cinePlus = cinePlus; // Actualizar el atributo cinePlus según el valor proporcionado en el cuerpo
        await subscriptionUser.save();
        itemDetails = {
          // id: itemId,
          name: `Subscription ${cinePlus}`,
          quantity,
          price,
          type,
        };
      }
      purchasedItems.push(itemDetails);
    }
    // Asignar los detalles de la compra al campo 'items' del modelo 'purchase'
    purchase.items = purchasedItems;
    await purchase.save();
    // Obtener el usuario asociado a la compra
    const user = await User.findByPk(userId);

    // Configurar el servicio de envío de correos electrónicos (SMTP)
    const transporter = nodemailer.createTransport({
      service: "hotmail", // Ejemplo: Gmail, Outlook, etc.
      auth: {
        user: "cinego75@hotmail.com",
        pass: "Proyecto1",
      },
    });

    // Obtener el nombre del usuario
    const { firstName } = user;
    const imagePath = path.join(__dirname, "../../assets/ImgCompras.jpg");
    // Configurar el mensaje de correo electrónico con estilos HTML
    const mailOptions = {
      from: "cinego75@hotmail.com",
      to: user.email,
      subject: "¡Compra realizada con éxito!",
      html: `
        <html>
          <head>
            <style>
              h1 {
                font-family: Arial;
                font-size: 20px;
              }
              p {
                font-family: Arial;
                font-size: 14px;
                margin-top: 10px;
                margin-bottom: 20px;
              }
              strong {
                font-size: 20px;
                font-weight: bold;
              }
              .message {
                text-align: center;
                font-family: Arial;
                font-size: 20px;
              }
              .center {
                display: flex;
                justify-content: center;
                align-items: center;
              }
              img {
                width: 720px;
                height: 380px;
                display: block;
                margin: 0 auto;
              }
            </style>
          </head>
          <body>
            <div class="center">
              <img src="cid:ImgCompras.jpg" alt="Logo" />
            </div>
            <h1 class="message">¡Hola ${firstName}!</h1>
            <p class="message"> Tu compra ha sido procesada con éxito y estamos trabajando arduamente para garantizar que disfrutes de una experiencia inolvidable en tu próxima visita al cine. Nos complace ofrecerte una amplia selección de películas y candy para que puedas disfrutar al máximo de tus momentos de entretenimiento. Si tienes alguna pregunta o necesitas asistencia adicional, nuestro equipo de atención al cliente estará encantado de ayudarte. Puedes ponerte en contacto con nosotros a través de nuestro sitio web o por correo electrónico. Una vez más, te agradecemos sinceramente por elegir CineGo como tu destino para comprar entradas de cine en línea. Estamos comprometidos a brindarte la mejor experiencia cinefila y esperamos verte pronto en nuestras salas. </p>
          </body>
        </html>
      `,
      attachments: [
        {
          filename: "ImgCompras.jpg",
          path: imagePath,
          cid: "ImgCompras.jpg",
        },
      ],
    };

    // Enviar el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error al enviar el correo electrónico:", error);
      } else {
        console.log("Correo electrónico enviado:", info.response);
      }
    });

    // Devolver la respuesta con la compra creada
    return { purchase, user };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = postPurchaseController;
