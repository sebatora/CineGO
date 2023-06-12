const adaptDog = (arr) =>
arr.map((element) => {
    const temperamentArr = element.temperament ? element.temperament.split(/(?:,| )+/) : [];
    return {
      id: element.id,
      name: element.name,
      image: element.image.url,
      height: element.height.metric,
      weight: element.weight.metric,
      life_span: element.life_span,
      createInDb: false,
      temperaments: temperamentArr,
    };
});

// const adaptDog = ({ id, name, image, height, weight, life_span }) => ({
//   id,
//   name,
//   image: image.url,
//   height: height.metric,
//   weight: weight.metric,
//   life_span,
//   createInDb: false,
//   // temperament: temperamentArr,
// });


module.exports = {
  adaptDog,
};
