const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Routes
const routerMovie = require("./routes/movie.routes.js");
const routerUser = require("./routes/user.routes.js");
const routerGenre = require("./routes/genre.routes.js");
const routerOrder = require("./routes/order.routes.js");
const routerCandy = require("./routes/candy.routes.js");
const routerSubscription = require("./routes/subscription.routes.js");
const routerPayment = require("./routes/payment.routes.js");
const routerResetPassword = require("./routes/resetpass.routes.js");
const routerPurchase = require("./routes/purchase.routes.js");
const routerRating = require("./routes/rating.routes.js");
const allBulk = require("./routes/allBulkCreate.routes.js");
const routerShow = require("./routes/show.routes.js");
const routerMetrics = require("./routes/metrics.routes.js");

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
app.use("/candy", routerCandy);
app.use("/subscription", routerSubscription);
app.use("/payment", routerPayment);
app.use("/reset", routerResetPassword);
app.use("/purchase", routerPurchase);
app.use("/rating", routerRating);
app.use("/create-proyect", allBulk);
app.use("/shows", routerShow);
app.use("/metrics", routerMetrics);

module.exports = app;
