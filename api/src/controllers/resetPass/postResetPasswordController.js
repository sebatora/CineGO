const { User } = require("../../db");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const postResetPasswordController = async (email, firstName) => {
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
  sendPasswordByEmail(email, newPassword);
};

const generateRandomPassword = () => {
  const characters = "qwertyuiopasdfghjklzxcvbnmqwQWERTYUIOPASDFGHJKLZXCVBNM0123456789";
  let newPassword = "";
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    newPassword += characters[randomIndex];
  }
  return newPassword;
};

const sendPasswordByEmail = (email, newPassword) => {
  // Configurar el transporte de nodemailer para enviar el correo
  const transporter = nodemailer.createTransport({
    // Configuración del transporte de correo (SMTP, etc.)
    service: "hotmail",
    auth: {
      user: "cinego75@hotmail.com",
      pass: "Proyecto1"
    }
  });

  // Configurar el mensaje del correo
  const mailOptions = {
    from: "cinego75@hotmail.com", // Remitente
    to: email, // Destinatario
    subject: "Nueva contraseña", // Asunto del correo
    text: `Tu nueva contraseña es: ${newPassword}` // Cuerpo del correo
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