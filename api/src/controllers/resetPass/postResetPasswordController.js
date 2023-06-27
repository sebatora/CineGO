const { User } = require("../../db");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const path = require("path");

const postResetPasswordController = async (firstName, email) => {
  // Convertir el correo electrónico a minúsculas
  email = email.toLowerCase();

  // Convertir el nombre a minúsculas y capitalizar la primera letra
  firstName = firstName.toLowerCase().charAt(0).toUpperCase() + firstName.toLowerCase().slice(1);

  // Generamos una nueva contraseña de manera aleatoria
  const newPassword = generateRandomPassword();

  // Encriptamos la nueva contraseña
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Obtener el usuario por el correo electrónico y el nombre
  const user = await User.findOne({ where: { email, firstName } });
  if (!user) throw new Error("El correo electrónico y el nombre no coinciden");

  // Actualizar la contraseña en la base de datos
  user.password = hashedPassword;
  await user.save();

  // Enviar la nueva contraseña por correo electrónico
  sendPasswordByEmail(email, newPassword, firstName);
};

const generateRandomPassword = () => {
  const characters =
    "qwertyuiopasdfghjklzxcvbnmqwQWERTYUIOPASDFGHJKLZXCVBNM0123456789";
  let newPassword = "";
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    newPassword += characters[randomIndex];
  }
  return newPassword;
};

const sendPasswordByEmail = (email, newPassword, firstName) => {
  // Configurar el transporte de nodemailer para enviar el correo
  const transporter = nodemailer.createTransport({
    // Configuración del transporte de correo (SMTP, etc.)
    service: "hotmail",
    auth: {
      user: "cinego75@hotmail.com",
      pass: "Proyecto1",
    },
  });

  const imagePath = path.join(__dirname, "../../assets/correoCineGo.jpg");

  // Configurar el mensaje del correo con estilos HTML
  const mailOptions = {
    from: "cinego75@hotmail.com", // Remitente
    to: email, // Destinatario
    subject: "Nueva contraseña", // Asunto del correo
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
            <img src="cid:correoCineGo.jpg" alt="Logo" />
          </div>
          <h1 class="message">Hola, ¡${firstName}!</h1>
          <p class="message">Acá está tu nueva contraseña:</p>
          <p class="message"><strong>${newPassword}</strong></p>
        </body>
      </html>
    `,
    attachments: [
      {
        filename: "correoCineGo.jpg",
        path: imagePath,
        cid: "correoCineGo.jpg",
      },
    ],
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo electrónico:", error);
    } else {
      console.log("Correo electrónico enviado:", info.response);
    }
  });
};

module.exports = postResetPasswordController;



// ACTUALIZACION DE CORREO OCUPEN ESE
