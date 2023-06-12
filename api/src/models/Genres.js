const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
//Definimos modelo
    sequelize.define("Genres", {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
    },
  );
}
          
