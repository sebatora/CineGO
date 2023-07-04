const getMetrics = async (allPurchases) => {
  const result = [];
  for (const obj of allPurchases) {
    const { id, purchase_date, items } = obj;
    for (const item of items) {
      const { name, type, price, quantity } = item;
      result.push({
        purchase_id: id,
        purchase_date,
        name,
        type,
        price,
        quantity,
      });
    }
  }
  return result;
};

module.exports = getMetrics;
