const resetPassword = require("../controllers/postResetPasswordController");

const handlerPostResetPassword = async (req, res) => {
    const { email } = req.body
    try {
        await resetPassword(email)
        res.status(200).json({ message: "Se ha enviado un correo electrónico para restablecer la contraseña" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

module.exports = handlerPostResetPassword;