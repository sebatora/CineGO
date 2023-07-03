const { dataAllUsers } = require("../../data/data.js");
const postUserAdmin = require("./postUserAdminController.js");
const getAllUsers = require("./getAllUsersController.js");

const postBulkUsers = async () => {

  dataAllUsers.forEach(user => {postUserAdmin(user)})

  bulkUsers = getAllUsers()

  return bulkUsers;
};

module.exports = postBulkUsers;