require("dotenv").config();
const app = require("./app.js");
const { sequelize }  = require("./db.js")

const PORT = process.env.PORT || 4000;
sequelize.sync({force:true}).then(()=>{
	app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
	});
})
