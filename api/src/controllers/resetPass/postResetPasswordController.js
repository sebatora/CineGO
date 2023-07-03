const { User } = require("../../db");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const path = require("path");

const postResetPassword = async ( email, firstName) => {
  // Convertir el correo electrónico a minúsculas
  email = email.toLowerCase();

  // Convertir el nombre a minúsculas y capitalizar la primera letra
  firstName = firstName.toUpperCase();

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
          <p class="message">Hemos completado el proceso de restablecimiento de tu contraseña en Cinego. ¡Aquí tienes tu nueva contraseña, lista para que vuelvas a disfrutar de nuestros servicios!</p>
          <p class="message"><strong>${newPassword}</strong></p>
          <td valign="middle" align="center" style="text-align: center; padding: 0px 20px 40px 415px;">
            <!-- Button : BEGIN -->
            <table role="presentation" align="center" cellspacing="0" cellpadding="0" border="0" class="center-on-narrow">
              <tr>
                <td style="text-align: center;">
                  <div class="center" style="border-radius: 50px; background: #2420ff; text-align: center;" class="button-td">
                    <a href="https://cine-go-ten.vercel.app" style="background: #2420ff; border: 15px solid #2420ff; font-family: 'Montserrat', sans-serif; font-size: 14px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 50px; font-weight: bold;" class="button-a">
                      <span style="color:white;" class="button-link">&nbsp;&nbsp;&nbsp;&nbsp;Ir a CineGo&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </a>
                  </div>
                </td>
              </tr>
            </table>
            <!-- Button : END -->
          </td>
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

module.exports = postResetPassword;

// ACTUALIZACION DE CORREO OCUPEN ESE
