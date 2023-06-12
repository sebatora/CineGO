const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    //Definimos modelo
        sequelize.define("Movies", {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true
            },
            
            title: {
              type: DataTypes.STRING,
              allowNull: false,
            },

            description: {
                type: DataTypes.STRING,
                allowNull: false, 
            },

            image: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            release_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },

          }
     )
}



