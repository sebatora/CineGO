const orderCandybyPriceDescending = async (filteredCopy) => {
  try {
    const order = filteredCopy.sort((a, b) => b.price - a.price);

    return order;
  } catch (error) {
    throw new Error("Error al ordenar los candy por precio ascendente");
  }
};

module.exports = orderCandybyPriceDescending;
