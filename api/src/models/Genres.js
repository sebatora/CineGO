const { DataTypes } = require("sequelize")

module.export = (sequelize) => {
//Definimos modelo
    sequelize.define("Genres", {
        id: {
          type: DataTypes.NUMBER,
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
          
