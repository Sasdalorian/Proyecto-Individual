import { getToken } from "./post.js";
import { adminShowVolunt } from "./gets.js";

export const authMiddleware = async (req, res, next) => {
  // Obtenemos el token
  const token = getToken();
  // Por si no se logra obtener el token de getToken
  if (!token) {
    res.status(401).json({ msg: 'No se proporcionó token de autenticación.' });
    return;
  }
  // Se validara si el token obtenido es correcto
  try {
    const data = await adminShowVolunt();
    if (data) {
      next();
    } else {
      res.status(401).json({ msg: 'Token no válido.' });
    }
  } catch (error) {
    console.error(error);
    res.redirect("login")
  }
};