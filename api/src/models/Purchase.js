const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Purchase = sequelize.define(
    "Purchase",
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
    },
    { timestamps: false }
  );

  // Establecer las relaciones entre Purchase y User
  //   Purchase.belongsTo(sequelize.models.User);
};
