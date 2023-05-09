import { mostrarPerfil } from "./gets.js";

export const datosPerfil = {
    id_usuario: '',
    nombre: '',
    apellidos: '',
    email: '',
    rol: '',
    censura: '',
    img: '',
    descripcion: '',
    isAdmin: false,
    isUser: false,
    isVoluntario: false,
    isAnfitrion: false
};

export async function obtenerDatosPerfil(req, res) {
    try {

        const usuario = await mostrarPerfil();
        const passE = usuario.pass;
        const Censurada = "********"

        datosPerfil.id_usuario = usuario.id_usuario
        datosPerfil.nombre = usuario.nombre;
        datosPerfil.apellidos = usuario.apellidos;
        datosPerfil.email = usuario.email;
        datosPerfil.rol = usuario.rol.clase;
        datosPerfil.censura = Censurada;
        datosPerfil.img = usuario.img;
        datosPerfil.descripcion = usuario.descripcion;

        datosPerfil.isAdmin = datosPerfil.rol === 'Admin';
        datosPerfil.isUser = datosPerfil.rol === 'Voluntario' || datosPerfil.rol === 'Admin' || datosPerfil.rol === 'Anfitrion';
        datosPerfil.isVoluntario = datosPerfil.rol === 'Voluntario' || datosPerfil.rol === 'Admin';
        datosPerfil.isAnfitrion = datosPerfil.rol === 'Anfitrion' || datosPerfil.rol === 'Admin';
        datosPerfil.isOnlyVolun = datosPerfil.rol === 'Voluntario'
        datosPerfil.isOnlyAnfi = datosPerfil.rol === 'Anfitrion'
        return datosPerfil;
    } catch (error) {
        console.log("No se ha obtenido Usuario")
    }
}

export function adminMiddleware(req, res, next) {
    if (datosPerfil.isAdmin) {
        next();
    } else {
        res.status(403).send("Acceso denegado");
    }
}
export function userMiddleware(req, res, next) {
    if (datosPerfil.isUser) {
        next();
    } else {
        res.status(403).send("Acceso denegado");
    }
}
export function voluntarioMiddleware(req, res, next) {
    if (datosPerfil.isVoluntario) {
        next();
    } else {
        res.status(403).send("Acceso denegado");
    }
}
export function anfitrionMiddleware(req, res, next) {
    if (datosPerfil.isAnfitrion) {
        next();
    } else {
        res.status(403).send("Acceso denegado");
    }
}
export function onlyVolunMiddleware(req, res, next) {
    if (datosPerfil.isOnlyVolun) {
        next();
    } else {
        res.status(403).send("Acceso denegado");
    }
}
export function onlyAnfiMiddleware(req, res, next) {
    if (datosPerfil.isOnlyAnfi) {
        next();
    } else {
        res.status(403).send("Acceso denegado");
    }
}