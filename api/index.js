require("dotenv").config();
const app = require("./src/app.js");
const postBulkGenres = require("./src/controllers/genre/postBulkGenresController.js");
const postBulkMovies = require("./src/controllers/movie/postBulkMoviesController.js");
const postBulkCandies = require("./src/controllers/candy/postBulkCandyController.js");
const { sequelize } = require("./src/db.js");

async function main(){
	try {
		await sequelize.sync({ force: true });
		console.log("Database synchronized successfully.");
	
		const PORT = process.env.PORT || 3001;
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});

		// SE EJECTAN LAS FUNCIONES PARA QUE CREE AUTOMATICAMENTE LAS TABLAS AL INICIAR EL SERVER
		postBulkGenres();
		postBulkMovies();
		postBulkCandies();
	} catch (error) {
		console.error("Error synchronizing database:", error);
	}
}

main();