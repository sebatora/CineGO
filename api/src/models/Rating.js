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
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
