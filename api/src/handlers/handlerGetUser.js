
const getAllUserController = require("../controllers/getAllUserController")

const handlerGetUser = async(req, res) =>{
    try {
        const dataUser = await getAllUserController()
        res.status(200).json(dataUser)
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

module.exports = handlerGetUser