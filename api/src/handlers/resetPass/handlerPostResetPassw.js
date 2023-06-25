const resetPassword = require("../../controllers/resetPass/postResetPasswordController");

const handlerPostResetPassword = async (req, res) => {
    const { email, firstName } = req.body;

    try {
        await resetPassword(email, firstName);
        res.status(200).json({ message: "Se ha enviado un correo electrónico con la nueva contraseña" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = handlerPostResetPassword;

