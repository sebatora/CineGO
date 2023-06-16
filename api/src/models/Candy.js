const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("candy", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        // lo dejamos comentado hasta tener las imagenes 
        // allowNull: false,
      },
      
    }, { timestamps: false }
  )
}
