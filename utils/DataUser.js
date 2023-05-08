import { mostrarPerfil } from "./gets.js";

export const datosPerfil = {
    nombre: '',
    apellidos: '',
    email: '',
    rol: '',
    censura: '',
    img: '',
    descripcion: '',
    isAdmin: false,
    isUser: false
};

export async function obtenerDatosPerfil(req, res) {
    try {
        const usuario = await mostrarPerfil(req, res);
        const passE = usuario.pass;
        const Censurada = passE.replace(    passE, "********");

        datosPerfil.nombre = usuario.nombre;
        datosPerfil.apellidos = usuario.apellidos;
        datosPerfil.email = usuario.email;
        datosPerfil.rol = usuario.rol.clase;
        datosPerfil.censura = Censurada;
        datosPerfil.img = usuario.img;
        datosPerfil.descripcion = usuario.descripcion;

        datosPerfil.isAdmin = datosPerfil.rol === 'Admin';
    } catch (error) {
        console.log(error);
    }
}

export function adminMiddleware(req, res, next) {
    if (datosPerfil.isAdmin) {
        next();
    } else {
        res.status(403).send("Acceso denegado");
    }
}