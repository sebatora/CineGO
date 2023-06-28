const allBulk = require("express").Router();

const bulkCreate = require("../handlers/allBulkCreateHandler");


allBulk.get("/cineGo/database/all/bulk-create", bulkCreate);

module.exports = allBulk;