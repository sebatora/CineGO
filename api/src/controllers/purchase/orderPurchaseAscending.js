const orderPurchaseAscending = async (filteredCopy) => {
  try {
    const order = filteredCopy.sort((a, b) =>
      a.purchase_date.localeCompare(b.purchase_date)
    );
    return order;
  } catch (error) {
    throw new Error("Error al ordenar los purchases");
  }
};

module.exports = orderPurchaseAscending;
