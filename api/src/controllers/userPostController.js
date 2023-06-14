const { Users } = require("../db")

const postUsers = async({name, email, password, age, image, city, province} ) => {
    if (!name|| !email || !password || !age || !image || !city || !province) {
        throw new Error("Faltan datos")
    }
    const userExisteng = await Users.findOne({ where: { email } });

    if (userExisteng) {
        throw new Error('El usuario ya existe');
    }
    const createUser = await Users.create({ name, email, password, age, image, city, province })
        return  ("Usuario creado exitosamente",createUser );
    }

   module.exports = {
    postUsers
   }