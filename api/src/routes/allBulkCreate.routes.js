const allBulk = require("express").Router();

const bulkCreate = require("../handlers/allBulkCreateHandler");


allBulk.get("/database/all/bulk-create", bulkCreate);

module.exports = allBulk;