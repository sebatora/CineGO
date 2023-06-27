const { User } = require("../../db");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const path = require("path");

const postUser = async ({ firstName, lastName, email, password, image }) => {
  if (!firstName || !lastName || !email || !password)
    throw new Error("Faltan datos");

  const userExists = await User.findOne({ where: { email } });
  if (userExists) throw new Error("El usuario ya existe");

  const passwordHash = await bcrypt.hash(password, 10);

  const userData = {
    firstName,
    lastName,
    email,
    password: passwordHash,
  };

  if (image !== "") {
    userData.image = image;
  }

  const createdUser = await User.create(userData);

  const imagePath = path.join(__dirname, "../../assets/bienvenido.jpg");

  // Configurar el servicio de envío de correos electrónicos (SMTP)
  const transporter = nodemailer.createTransport({
    service: "hotmail", // Ejemplo: Gmail, Outlook, etc.
    auth: {
      user: "cinego75@hotmail.com",
      pass: "Proyecto1",
    },
  });

  // Configurar el mensaje de correo electrónico con estilos HTML
  const mailOptions = {
    from: "cinego75@hotmail.com",
    to: createdUser.email,
    subject: "¡Bienvenido a cineGO!",
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
            <img src="cid:bienvenido.jpg" alt="Logo" />
          </div>
          <h1 class="message">Hola ${firstName}!</h1>
          <p class="message">Tu cuenta ha sido creada exitosamente. ¡Disfruta de la mejor experiencia de cine!</p>
        </body>
      </html>
    `,
    attachments: [
      {
        filename: "bienvenido.jpg",
        path: imagePath,
        cid: "bienvenido.jpg",
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

  return "Usuario creado exitosamente";
};

module.exports = postUser;
