export const validarPassword = (password) => {
  if (password.length >= 8) {
    if (isNaN(parseInt(password)))
      return { valido: false, errores: ["Falta un número"] };
    return { valido: true, errores: [] };
  } else
    return { valido: false, errores: ["Mensaje del error"] };
};
