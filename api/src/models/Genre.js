const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("genre", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, { timestamps: false }
  )
}
