import { sequelize } from "../database/data.js";

import { Rol } from "../database/class/Rol.js";
import { Usuario } from "../database/class/Usuario.js";

export async function agregarRol(nombre) {
    try {
        
        const rol = await Rol.create({
            nivel: nombre
        });
        console.log(`Se ha agregado el Rol ${nombre}`);
        return true;
    } catch (err) {
        console.error("No se pudo agregar el nivel del rol", err);
        return false;
    };
};
