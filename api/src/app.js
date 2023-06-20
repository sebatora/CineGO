const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Routes
const routerMovie = require("./routes/movie.routes.js");
const routerUser = require("./routes/user.routes.js");
const routerGenre = require("./routes/genre.routes.js");
const routerOrder = require("./routes/order.routes.js");
const routerCandy = require("./routes/candy.routes.js")
const routerSubscription = require("./routes/susbcription.routes.js")

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/movies", routerMovie);
app.use("/users", routerUser);
app.use("/genres", routerGenre);
app.use("/order", routerOrder);
app.use("/candy", routerCandy)
app.use("/susbcription", routerSubscription);


module.exports = app;
