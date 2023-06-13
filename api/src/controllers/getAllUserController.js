const { Users } = require("../db")

const getAllUserController = async() =>{
    const dataUsers = await Users.findAll()
    return dataUsers;
}

module.exports = getAllUserController