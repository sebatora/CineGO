const { User } = require("../db")

const getAllUsers = async() =>{
    const dataUsers = await User.findAll()
    return dataUsers;
}

module.exports = getAllUsers