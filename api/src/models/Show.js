const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "show",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,

        // segundo modelo
        // type: DataTypes.UUID,
        // primaryKey: true,
        // defaultValue: DataTypes.UUIDV4,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      hour: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        defaultValue: "show",
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // language: {
      //   type: DataTypes.STRING,
      //   defaultValue: "Subtitulada",
      // },
    },
    { timestamps: false }
  );
};
