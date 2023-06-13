require("dotenv").config();
const app = require("./app.js");
const { sequelize } = require("./db.js");

async function main(){
	try {
		await sequelize.sync({ force: true });
		console.log("Database synchronized successfully.");
	
		const PORT = process.env.PORT || 3001;
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	} catch (error) {
		console.error("Error synchronizing database:", error);
	}
}

main();