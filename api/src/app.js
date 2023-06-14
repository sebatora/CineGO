const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Routes
const routerMovie = require("./routes/movie.routes.js");
const routerUser = require("./routes/user.routes.js");
const routerGenre = require("./routes/genre.routes.js");
const postBulkGenres = require("./controllers/postBulkGenresController.js");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
postBulkGenres();
app.use("/movies", routerMovie);
app.use("/users", routerUser);
app.use("/genres", routerGenre);


module.exports = app;
