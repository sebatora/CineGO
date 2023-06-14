const postUser = require("../controllers/postUserController")

const handlerPostUser = async(req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body 
    const userData = await postUser({firstName, lastName, email, password})
    res.status(200).json(userData);
  } catch (error) {
      res.status(400).json({ error : error.message })
  }
}

module.exports = handlerPostUser