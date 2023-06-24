const { User } = require("../../db");
const { uploadImage } = require("../../utils/cloudinary");

const postUserValidateGoogle = async ({ firstName, lastName, image, email, token }) => {
  const [newUser, created] = await User.findOrCreate({ 
    where: { email },
    defaults: { firstName, lastName, email, image }
  });

  let updatedImage = newUser.image;

  if (image || image !== newUser.image) {
    const cloudinaryResponse = await uploadImage(image);
    updatedImage = cloudinaryResponse.secure_url;
  }

  newUser.image = updatedImage;
  await newUser.save();

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



