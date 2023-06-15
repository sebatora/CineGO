const getOrderAZ = async (filteredCopy) => {
  try {
    const order = filteredCopy.sort((a, b) => a.title.localeCompare(b.title));
    return order;
  } catch (error) {
    throw new Error("Error al tratar de ordenar de la A la Z");
  }
};

module.exports = getOrderAZ;
