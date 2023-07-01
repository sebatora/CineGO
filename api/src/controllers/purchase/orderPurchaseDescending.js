const orderPurchaseDescending = async (filteredCopy) => {
  try {
    const order = filteredCopy.reverse();
    return order;
  } catch (error) {
    throw new Error("Error al ordenar los purchases");
  }
};

module.exports = orderPurchaseDescending;
