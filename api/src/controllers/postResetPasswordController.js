const { User } = require("../db")
const bcrypt = require("bcrypt")
const nodemailer = require("nodemailer")

const postResetPasswordController = async(email) => {
  // Generamos una nueva contraseña de manera aleatoria
  const newPassword = generateRandomPassword();

  // Encriptamos la nueva contraseña 
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Actualizar la contraseña en la BDD para el usuario correspondiente al correo
  const user = await User.findOne({ where: { email } });
  if (!user) throw Error("No existe ningun usuario con ese email");

  user.password = hashedPassword
  await user.save();

  // Enviar la nueva contraseña por correo
  sendPasswordByEmail(email, newPassword);
};

const generateRandomPassword = () => {
    //lógica para generar una nueva contraseña aleatoria
    const characters = "qwertyuiopasdfghjklzxcvbnmqwQWERTYUIOPASDFGHJKLZXCVBNM0123456789"
    let newPassword = "";
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        newPassword = newPassword + characters[randomIndex]
    }
    return newPassword
};

const sendPasswordByEmail = (email, newPassword) => {
    // Configurar el transporte de nodemailer para enviar el correo
    const transporter = nodemailer.createTransport({
        // tengo que connfigurar el transporte de correo ej, SMTP
        service: "hotmail",
        auth: {
            user: "cinego75@hotmail.com",
            pass: "Proyecto1"
        },
    });

    // configuar el mensaje del correo
    const mailOptions = {
        from: "cinego75@hotmail.com", // remitente
        to: email, // Destinatario
        subject: "Nueva contraseña", // Asunto del correo 
        text: `Tu nueva contraseña es: ${newPassword}`, // Cuerpo del correo
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.error("Error al enviar el correo electrónico:", error);
        } else {
            console.log("Correo electrónico enviado:", info.response);
        } 
    })
}


module.exports = postResetPasswordController;