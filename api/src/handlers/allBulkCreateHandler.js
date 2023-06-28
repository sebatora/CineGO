
const allData = require("../controllers/allBulkCreateController");

const bulkCreate = async(req, res) =>{
    try {
        const all = await allData();
        
        res.status(200).json(all,);

      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

module.exports = bulkCreate;