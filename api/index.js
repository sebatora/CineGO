require("dotenv").config();
const app = require("./src/app.js");
<<<<<<< HEAD
const postBulkGenres = require("./src/controllers/genre/postBulkGenresController.js");
const postBulkMovies = require("./src/controllers/movie/postBulkMoviesController.js");
const postBulkCandies = require("./src/controllers/candy/postBulkCandyController.js");
=======
const postBulkGenres = require("./src/controllers/postBulkGenresController.js");
const postBulkMovies = require("./src/controllers/postBulkMoviesController.js");
const postBulkCandies = require("./src/controllers/postBulkCandyController.js");
>>>>>>> d4969232f78ff0a7a1cf24cb85e029f14d3d1ad1
const { sequelize } = require("./src/db.js");

async function main(){
	try {
<<<<<<< HEAD
		await sequelize.sync({ force: true });
=======
		await sequelize.sync({ force: false });
>>>>>>> d4969232f78ff0a7a1cf24cb85e029f14d3d1ad1
		console.log("Database synchronized successfully.");
	
		const PORT = process.env.PORT || 3001;
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});

		// SE EJECTAN LAS FUNCIONES PARA QUE CREE AUTOMATICAMENTE LAS TABLAS AL INICIAR EL SERVER
<<<<<<< HEAD
		postBulkGenres();
		postBulkMovies();
		postBulkCandies();
=======
		// postBulkGenres();
		// postBulkMovies();
		// postBulkCandies();
>>>>>>> d4969232f78ff0a7a1cf24cb85e029f14d3d1ad1
	} catch (error) {
		console.error("Error synchronizing database:", error);
	}
}

main();