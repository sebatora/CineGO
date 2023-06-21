const { User } = require("../db");

const postUserValidateGoogle = async ({ firstName, lastName, image, email, token }) => {
  const [newUser, created] = await User.findOrCreate({ 
    where: { email },
    defaults: { firstName, lastName, email }
  });

  if (image) {
    newUser.image = image; // Asigna la URL de la imagen directamente a la propiedad 'image'
    await newUser.save();
  }

  const user = {
    id: newUser.id,
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    email: newUser.email,
    image: newUser.image,
    cinePlus: newUser.cinePlus,
    isAdmin: newUser.isAdmin,
    token
  };

  return user;
};

module.exports = postUserValidateGoogle;
