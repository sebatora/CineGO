const { dataAllUsers } = require("../../data/data.js");
const postUser = require("./postUserController.js");
const getAllUsers = require("./getAllUsersController.js");

const postBulkUsers = async () => {

  dataAllUsers.forEach(user => {postUser(user)})

  bulkUsers = getAllUsers()

  return bulkUsers;
};

module.exports = postBulkUsers;