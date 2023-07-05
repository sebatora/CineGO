const putUserSubscription = require("../../controllers/subscription/putUserSubscriptionController");

const handlerPutUserSubscription = async (req, res) => {
  try {
    const { id, cinePlus } = req.body;
    // Llamamos al controlador para modificar el estado
    const userSubscription = await putUserSubscription(id, cinePlus);

    res.status(200).json(userSubscription);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPutUserSubscription;
