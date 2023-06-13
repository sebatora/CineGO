const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Routes
const movieRouter = require("./routes/movie.routes.js");
const usersRouter = require("./routes/user.routes.js");
const genreRouter = require("./routes/genre.routes.js");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/movies", movieRouter);
app.use("/users", usersRouter);
app.use("/genre", genreRouter);


module.exports = app;
