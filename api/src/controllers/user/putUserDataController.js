const { User } = require("../../db");
const nodemailer = require("nodemailer");
const path = require("path");
const bcrypt = require("bcryptjs");

const putUserData = async (userId, firstName, lastName, email, password, image) => {
  if (!userId) throw new Error("Faltan datos");

  // Verificamos que el usuario exista
  const user = await User.findOne({ where: { id: userId } });
  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  // Actualizamos los datos
  user.firstName = firstName || user.firstName;
  user.lastName = lastName || user.lastName;
  user.email = email || user.email;
  user.image = image || user.image;
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
              margin: 20px;
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
          <p class="message">¡Confirmamos que los datos de su cuenta en Cinego han sido actualizados con éxito! Ahora, su información refleja los cambios solicitados. ¡Gracias por su confianza!</p>
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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo electrónico:", error);
    } else {
      console.log("Correo electrónico enviado:", info.response);
    }
  });
};

module.exports = putUserData;
