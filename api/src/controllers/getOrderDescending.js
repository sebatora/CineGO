const getOrderDescending = async (filteredCopy) => {
  try {
    const order = filteredCopy.sort((a, b) =>
      b.release_date.localeCompare(a.release_date)
    );
    return order;
  } catch (error) {
    throw new Error("Error al obtener los generos");
  }
};

module.exports = getOrderDescending;
