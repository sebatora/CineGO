const routerShow = require("express").Router();
const handlerGetAllShow = require("../handlers/show/handlerGetAllShow")


//Ruta para traer todos los shows
routerShow.get("/", handlerGetAllShow);

module.exports = routerShow;