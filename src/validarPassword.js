export const validarPassword = (password) => {
  if (password.length >= 8)
    return { valido: true, errores: [] };
  return { valido: false, errores: ["Mensaje del error"] };
};
