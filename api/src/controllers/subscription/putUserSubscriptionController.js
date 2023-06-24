const { User } = require("../../db")

const putUserSubscriptionController = async (userId, cinePlus) => {
    
    if(!userId) throw new Error("Faltan datos")

     // verificamos que usuario exista
     //findOne = verifica si el usuario existe en la base de datos
     //{ where: { id: userId } } = es un objeto que especifica los criterios de busqueda, busca que id sea === al valor de userId
     const user = await User.findOne({ where: { id: userId } });
        if(!user) {
          throw new Error("Usuario no encontrado");
        }
      // Actualizamos el estado de suscripción 
      user.cinePlus = cinePlus;
     // Se guardan los cambios
     //save()= metodo para guardar cambios en la BDD
     await user.save();

    

    return "Cambio correcto del estado de suscripción";
     
};

module.exports = putUserSubscriptionController;