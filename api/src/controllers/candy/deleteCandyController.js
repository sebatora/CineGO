const { Candy } =  require("../../db");

const deleteCandy = async({id}) => { 

  const producto = await Candy.destroy({where: {id : Number(id)}});

  if (producto === 0) {
    return `El producto con el id: ${id} no existe`;
  } else {
    return `El producto con el id: ${id} se elemino con éxito`;
  }
}

module.exports = deleteCandy;