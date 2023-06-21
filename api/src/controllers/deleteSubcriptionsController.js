const { Suscription } = require("../db");

const deleteSubcription = async(id) => {
    const deletedSubscription = await Suscription.findByIdAndDelete(id);
    if (!deletedSubscription) {
        console.log("No se encontró ninguna suscripción con el ID proporcionado");
    } else {
        console.log("Suscripción eliminada:", deletedSubscription)
    }
}

module.exports = deleteSubcription;
        