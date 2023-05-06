import { mostrarPerfil } from "./gets.js";

export const datosPerfil = {
    nombre: '',
    apellidos: '',
    email: '',
    rol: '',
    censura: '',
    img: '',
    descripcion: ''
};

export async function obtenerDatosPerfil(req, res) {
    try {
        const usuario = await mostrarPerfil(req, res);
        const passE = usuario.pass;
        const Censurada = passE.replace(passE, "********");

        datosPerfil.nombre = usuario.nombre;
        datosPerfil.apellidos = usuario.apellidos;
        datosPerfil.email = usuario.email;
        datosPerfil.rol = usuario.rol.clase;
        datosPerfil.censura = Censurada;
        datosPerfil.img = usuario.img;
        datosPerfil.descripcion = usuario.descripcion;

    } catch (error) {
        console.log(error);
        throw new Error("Error al obtener el perfil.");
    }
}