require("dotenv").config()
const {Sequelize} = require("sequelize")
// const Movies = require("./models/Movies")
// const Genres = require("./models/Genres")
const {PASSWORD, DB_USER, DB_HOST, DB_NAME, DB_PORT} = process.env


const sequelize = new Sequelize(`postgres://${DB_USER}:${PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    logging: false,
    native:false
})
// postgres://user:pass@example.com:5432/dbname
//${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}

// const { Movies, Genres } = sequelize.models

// movies(sequelize)
// genres(sequelize)

// Movies.belongsToMany(Genres, { through: 'ActorMovies' });
// Genres.belongsToMany(Movies, { through: 'ActorMovies' });

module.exports = {
    ...sequelize.models,
    sequelize
}