const { User } = require("../../db");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const path = require("path");

const postUser = async ({ firstName, lastName, email, password, image }) => {
  if (!firstName || !lastName || !email || !password)
    throw new Error("Faltan datos");

  firstName = firstName.toUpperCase();
  lastName = lastName.toUpperCase();
  email = email.toLowerCase();

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
              margin-top: 10px;
              mergin-botton: 20px;
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
          <h1 class="message">Bienvenido ${firstName}!</h1>
          <p class="message"> En nombre de todo el equipo de CineGo, nos complace darte la más cálida bienvenida a nuestra plataforma de venta de entradas en línea. Estamos encantados de tenerte como parte de nuestra comunidad cinéfila y estamos seguros de que disfrutarás de una experiencia inolvidable con nosotros. </p>
          <td valign="middle" align="center" style="text-align: center; justify-content: center; align-items: center ; padding: 0px 20px 40px 415px;">

                <!-- Button : BEGIN -->
                <table role="presentation" align="center" cellspacing="0" cellpadding="0" border="0" class="center-on-narrow">
                    <tr>
                        <td style="border-radius: 50px; background: #2420ff; text-align: center;" class="button-td">
                            <a href="https://cine-go-ten.vercel.app" style="background: #2420ff; border: 15px solid #2420ff; font-family: 'Montserrat', sans-serif; font-size: 14px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 50px; font-weight: bold;" class="button-a">
                                <span style="color:white;" class="button-link">&nbsp;&nbsp;&nbsp;&nbsp;Empezar&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </a>
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
