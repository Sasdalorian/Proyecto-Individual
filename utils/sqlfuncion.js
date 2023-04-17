import { sequelize } from "../database/data.js";

import { Rol } from "../database/class/Rol.js";
import { Usuario } from "../database/class/Usuario.js";
import { Areas } from "../database/class/Areas.js";
import { Voluntariados } from "../database/class/Voluntariados.js";

// CARGAR TABLAS
export async function syncTables() {
    try {
        await sequelize.sync();
        console.log("Tablas sincronizadas correctamente.")
    } catch (error) {
        console.error("No se han podido sincronizar las Tablas.")
    }
}

// AGREGAR ROLES
export async function agregarRol(nombre) {
    try {
        
        const rol = await Rol.create({
            nivel: nombre
        });
        console.log(`Se ha agregado el Rol ${nombre}.`);
        return true;
    } catch (err) {
        console.error("No se pudo agregar el nivel del rol.", err);
        return false;
    };
};
<<<<<<< HEAD
=======

// AGREGAR USUARIO
export async function agregarUsuario(nombre, apellidos, email, pass, idrol) {
    try {
        const usuario = await Usuario.create({
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            pass: pass,
            idrol: idrol
        });
        console.log(`Se ha agregado el Usuario ${nombre}.`);
        return true;
    } catch (err) {
        console.error("No se ha podido agregar al usuario.", err);
        return false;
    }
};

// AGREGAR AREAS
export async function agregarArea(nombre) {
    try {
        const area = await Areas.create({
            nombreArea: nombre
        });
        console.log(`Se ha agregado el Area ${nombre}.`);
        return true;
    } catch (err) {
        console.error("No se ha podido agregar el area.", err);
        return false;
    }
};

// AGREGAR TABLA VOLUNTARIADO
export async function agregarVoluntariado(titulo, ubicacion, duracion, quehacer, beneficio, cantidad, img, idareas, id_usuario) {
    try {
        const voluntariado = await Voluntariados.create({
            titulo,
            ubicacion,
            duracion,
            quehacer,
            beneficio,
            cantidad,
            img,
            idareas,
            id_usuario
        });
        console.log("Se ha agregado el Voluntariado.");
        return true;
    } catch (err) {
        console.error("No se ha podido agregar el voluntariado.", err)
    }
}
>>>>>>> 2257f5a5dbf077137c0fa9443b40215fcad37b3b
