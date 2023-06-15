const getOrderAscending = async (filteredCopy) => {
  try {
    const order = filteredCopy.sort((a, b) =>
      a.release_date.localeCompare(b.release_date)
    );
    return order;
  } catch (error) {
    throw new Error("Error al obtener los generos");
  }
};

module.exports = getOrderAscending;
