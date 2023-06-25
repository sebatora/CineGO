const { User } = require("../../db");
const nodemailer = require("nodemailer");
const path = require("path");
const bcrypt = require("bcryptjs");

const putUserData = async (
  userId,
  firstName,
  lastName,
  phone,
  email,
  password
) => {
  if (!userId) throw new Error("Faltan datos");

  // Verificamos que el usuario exista
  const user = await User.findOne({ where: { id: userId } });
  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  // Actualizamos los datos
  user.firstName = firstName || user.firstName;
  user.lastName = lastName || user.lastName;
  user.phone = phone || user.phone;
  user.email = email || user.email;
  if (password) {
    const passwordHash = await bcrypt.hash(password, 10);
    user.password = passwordHash;
  }

  // Guardamos los cambios
  await user.save();

  // Enviar correo electrónico de notificación
  sendEmailNotification(user);

  return "Datos del usuario actualizados exitosamente";
};

const sendEmailNotification = (user) => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "cinego75@hotmail.com",
      pass: "Proyecto1",
    },
  });

  const imagePath = path.join(__dirname, "../../assets/correoCineGo.jpg");

  const mailOptions = {
    from: "cinego75@hotmail.com",
    to: user.email,
    subject: "Actualización de datos",
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
          <h1 class="message">¡Hola, ${user.firstName}!</h1>
          <p class="message">Tus datos han sido actualizados exitosamente.</p>
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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo electrónico:", error);
    } else {
      console.log("Correo electrónico enviado:", info.response);
    }
  });
};

module.exports = putUserData;
