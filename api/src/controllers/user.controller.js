const { Users } = require("../db")

const postUsers = async( req, res ) => {
    try {
        const { name, email, password, age, image } = req.body 
     const userExisteng = await Users.findOne({ where: { email } });

    if (userExisteng) {
      return res.status(400).json({ mensaje: 'El usuario ya existe' });
    }

        const createUser = await Users.create({ name, email, password, age, image })
        return res.status(201).json({ message: 'Usuario creado exitosamente', createUser });
    } catch (error) {
        return res.status(400).json({error : error.message})
    }
   }

const getAllUsers = async(req, res) =>{
    try {
        const dataUsers = await Users.findAll()
       return res.status(200).json(dataUsers)
    } catch (error) {
        return res.status(400).json({error : error.message})
        
    }
}

   module.exports = {
    postUsers,
    getAllUsers
   }