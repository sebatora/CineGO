export const validateField = (name, value) => {
  // Para evitar caracteres especiales
  let RegExpressionSpecial = /^[a-zA-Z\s]*\s*$/;
  let RegExpressionEmail = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;
  switch (name) {
    case "firstName":
      if (!RegExpressionSpecial.test(value)) {
        return "No se permiten caracteres especiales ni números";
      } else if (value.length > 18) {
        return "El nombre no puede tener más de 18 caracteres";
      }
      break;
    case "lastName":
      if (!RegExpressionSpecial.test(value)) {
        return "No se permiten caracteres especiales ni números";
      } else if (value.length > 18) {
        return "El nombre no puede tener más de 18 caracteres";
      }
      break;
    case "email":
      if (!RegExpressionEmail.test(value)) {
        return "Ingresa un formato válido de Email";
      } else if (value.length > 40) {
        return "El email es demasiado largo";
      }
      break;
  }
};
