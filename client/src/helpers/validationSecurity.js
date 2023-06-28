import Swal from "sweetalert2";

export function validateForm(user) {
  const { password, confirmPassword } = user;

  if (!password) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "¡Contraseña vacía!",
    });
    return false;
  }

  if (!confirmPassword) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "¡Confirma tu contraseña!",
    });
    return false;
  }

  if (password !== confirmPassword) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "¡La contraseña y la confirmación no coinciden!",
    });
    return false;
  }

  if (password.length < 8) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "¡La contraseña debe tener al menos 8 caracteres!",
    });
    return false;
  }

  if (!/[A-Z]/.test(password)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "¡La contraseña debe contener al menos una letra mayúscula!",
    });
    return false;
  }

  return true;
}
