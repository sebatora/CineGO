
const { postUsers } = require("../controllers/userPostController")

const postHandleUsers = async(req, res) => {
    try {
        const { name, email, password, age, image, city, province } = req.body 
        const dataUser = await postUsers({name, email, password, age, image, city, province} )
         res.status(200).json(dataUser);
    } catch (error) {
         res.status(400).json({ error : error.message })
    }
   }
module.exports = postHandleUsers
