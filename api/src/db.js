require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { PGDATABASE, PGHOST, PGPORT, PGUSER, PGPASSWORD } = process.env;

const sequelize = new Sequelize(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`,
  {
    logging: false,
    native: false,
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Movie, Genre, User, Show, Candy, Purchase, Raiting } = sequelize.models;

Movie.belongsToMany(Genre, { through: "movie_genre", timestamps: false });
Genre.belongsToMany(Movie, { through: "movie_genre", timestamps: false });
Movie.hasMany(Show, {
  foreignKey: "movieId",
  as: "shows",
});
Show.belongsTo(Movie, {
  foreignKey: "movieId",
});

//relación entre Purchase y User
User.hasMany(Purchase, {
  foreignKey: "userId",
  as: "purchases",
});
Purchase.belongsTo(User, {
  foreignKey: "userId",
});

// relación muchos a muchos con Show a través de PurchaseItem
Purchase.belongsToMany(Show, {
  through: "purchaseItem",
  foreignKey: "purchaseId",
  otherKey: "itemId",
});
Show.belongsToMany(Purchase, {
  through: "purchaseItem",
  foreignKey: "itemId",
  otherKey: "purchaseId",
});

// Establecer la relación muchos a muchos con Candy a través de PurchaseItem
Purchase.belongsToMany(Candy, {
  through: "purchaseItem",
  foreignKey: "purchaseId",
  otherKey: "itemId",
});
Candy.belongsToMany(Purchase, {
  through: "purchaseItem",
  foreignKey: "itemId",
  otherKey: "purchaseId",
});

module.exports = {
  ...sequelize.models,
  sequelize,
};
