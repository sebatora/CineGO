const postUser = require("../../controllers/user/postUserController");

const handlerPostUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, image } = req.body;

    const userData = await postUser({
      firstName,
      lastName,
      email,
      password,
      image,
    });

    res.status(200).json(userData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = handlerPostUser;
