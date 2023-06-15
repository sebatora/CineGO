const getOrderAscending = require('../controllers/getOrderAscending');
const getOrderDescending = require('../controllers/getOrderDescending');


const handlerFilterMovies = async (req, res) => {
    const { order, filterGenre, filterClasification } = req.body;

    try{
        let filtered = null;
        
        if (order){
        
         if (order === "ascending"){
             filtered = await getOrderAscending();
            // return res.status(200).json(ordered);
            // order = 1 ascendente, descendente, reciente, antiguo
        
        } else if (order === "descending"){
             filtered = await getOrderDescending();
            // return res.status(200).json(ordered);
        }
        
        // if(filterGenre){
            //      console.log("hay generos")
            // }
            
            // if(filterClasification){
            //     console.log("estan clasificados")
            // } ATP, +13, +16
            
        return res.status(200).json(filtered);
        
    }

    } catch (error) {
      res.status(500).json({ error: 'Error filtrando.' });
    }
};

module.exports = handlerFilterMovies;