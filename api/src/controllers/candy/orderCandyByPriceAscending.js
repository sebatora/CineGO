const orderCandyByPriceAscending = async (filteredCopy) => {
  try {
    const order = filteredCopy.sort((a, b) => a.price - b.price);
    return order;
  } catch (error) {
    throw new Error("Error al ordenar los candy por precio ascendente");
  }
};

module.exports = orderCandyByPriceAscending;
