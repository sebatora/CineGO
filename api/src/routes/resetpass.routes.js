const routerResetPassword = require("express").Router();
const handlerPostResetPassword = require("../handlers/resetPass/handlerPostResetPassword");

// Ruta para modificar contraseña y mandar correo 
routerResetPassword.post("/", handlerPostResetPassword);

module.exports = routerResetPassword;