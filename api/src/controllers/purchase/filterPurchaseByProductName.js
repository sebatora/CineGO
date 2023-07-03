const filterPurchasesByProductName = (filteredCopy, productName) => {
  try {
    const filteredPurchases = filteredCopy.filter((purchase) => {
      const items = purchase.items || [];
      return items.some((item) => item.name === productName);
    });
    const filteredItems = filteredPurchases.map((purchase) => {
      const items = purchase.items || [];
      const filteredItems = items.filter((item) => item.name === productName);
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

module.exports = filterPurchasesByProductName;
