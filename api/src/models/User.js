const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue: "https://cdn-icons-png.flaticon.com/512/666/666201.png",
      },
      cinePlus: {
        type: DataTypes.STRING,
        defaultValue: "Estandar",
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
};
