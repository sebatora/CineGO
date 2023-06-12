const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Routes
const userRouter = require("./routes/user.routes.js");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/", userRouter);

module.exports = app;