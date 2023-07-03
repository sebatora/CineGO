const orderCandyByStockAscending = async (filteredCopy) => {
  try {
    const order = filteredCopy.sort((a, b) => a.stock - b.stock);
    return order;
  } catch (error) {
    throw new Error("Error al ordenar por stock de forma ascendente");
  }
};

module.exports = orderCandyByStockAscending;
