const { DataTypes } = require("sequelize")

module.export = (sequelize) => {
    //Definimos modelo
        sequelize.define("Movies", {
            id: {
              type: DataTypes.NUMBER,
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



