const handlerOrderAscending = require("../handlers/handlerOrderAscending");
const handlerOrderDescending = require("../handlers/handlerOrderDescending copy");

const routerOrder = require("express").Router();

// Trae todas las peliculas por orden
routerOrder.get("/sortascending", handlerOrderAscending);
routerOrder.get("/sortdescending", handlerOrderDescending);

module.exports = routerOrder;
