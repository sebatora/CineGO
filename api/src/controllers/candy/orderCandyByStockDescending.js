const orderCandybyStockDescending = async (filteredCopy) => {
  try {
    const order = filteredCopy.sort((a, b) => b.stock - a.stock);
    return order;
  } catch (error) {
    throw new Error("Error al ordenar por stock de forma descendente");
  }
};

module.exports = orderCandybyStockDescending;
