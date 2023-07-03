const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "purchase",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      purchase_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      // items: {
      //   type: DataTypes.ARRAY,
      //   defaultValue: [],
      // },
      items: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: [],
      },
      orderNumber: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );

  // Establecer las relaciones entre Purchase y User
  //   Purchase.belongsTo(sequelize.models.User);
};
