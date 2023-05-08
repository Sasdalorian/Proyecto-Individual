import { getToken } from "./post.js";
import { adminShowVolunt } from "./gets.js";

export const authMiddleware = async (req, res, next) => {
  // Obtenemos el token
  const token = getToken();
  // Por si no se logra obtener el token de getToken
  if (!token) {
    console.log({ msg: 'No se proporcionó token de autenticación.' });
    res.redirect("login")
    return;
  }
  // Se validara si el token obtenido es correcto
  try {
    const data = await adminShowVolunt();
    if (data) {
      next();
    } else {
      console.log({ msg: 'Token no válido.' });
      res.redirect("login")
    }
  } catch (error) {
    console.error(error);
    res.redirect("login")
  }
};