const { Show } = require("../db");

const putShowStock = async (showId, stockToSubtract) => {
  try {
    const show = await Show.findByPk(showId);
    if (!show) {
      return res.status(404).json({ error: "Show not found" });
    }
    show.stock -= stockToSubtract;
    await show.save();
    return res.status(200).json({ message: "Show updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = putShowStock;
