require("dotenv").config();
const app = require("./app.js");
const postBulkGenres = require("./controllers/postBulkGenresController.js");
const postBulkMovies = require("./controllers/postBulkMoviesController.js");
const postBulkCandies = require("./controllers/postBulkCandyController.js");
const { sequelize } = require("./db.js");

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