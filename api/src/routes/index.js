const router = require("express").Router();
const dogRouter = require("./dogRouter");
const tempRouter = require("./tempRouter");


router.use("/dogs", dogRouter);
router.use("/temperaments", tempRouter);


module.exports = router;
