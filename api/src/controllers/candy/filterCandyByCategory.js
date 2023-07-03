const filterCandyByCategory = (filteredCopy, category) => {
  try {
    const filteredCandy = filteredCopy.filter(
      (candy) => candy.category === category
    );
    return filteredCandy;
  } catch (error) {
    throw new Error("Error al filtrar los candy por categoría");
  }
};

module.exports = filterCandyByCategory;
