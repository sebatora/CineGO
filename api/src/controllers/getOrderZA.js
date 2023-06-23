const getOrderZA = async (filteredCopy) => {
  try {
    const order = filteredCopy.sort((a, b) => b.title.localeCompare(a.title));
    return order;
  } catch (error) {
    throw new Error("Error al ordenar de la Z a la A");
  }
};

module.exports = getOrderZA;
