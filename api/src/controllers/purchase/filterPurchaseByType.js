const filterPurchasesByType = (filteredCopy, type) => {
  try {
    const filteredPurchases = filteredCopy.filter((purchase) => {
      const items = purchase.items || [];
      return items.some((item) => item.type === type);
    });
    const filteredItems = filteredPurchases.map((purchase) => {
      const items = purchase.items || [];
      const filteredItems = items.filter((item) => item.type === type);
      return {
        ...purchase.dataValues,
        items: filteredItems,
      };
    });
    return filteredItems;
  } catch (error) {
    throw new Error("Error al filtrar los purchases");
  }
};

module.exports = filterPurchasesByType;
