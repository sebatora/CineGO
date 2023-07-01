const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "rating",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
    },
    { timestamps: false }
  );
};
