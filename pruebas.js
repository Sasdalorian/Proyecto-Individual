import { sequelize } from "./database/data.js";

import { Rol } from "./database/class/Rol.js";
import { Usuario } from "./database/class/Usuario.js";
import { Areas} from "./database/class/Areas.js";
import { Voluntariados } from "./database/class/Voluntariados.js";

import { syncTables, agregarRol, agregarUsuario, agregarArea, agregarVoluntariado } from "./utils/sqlfuncion.js";

await syncTables();
await agregarRol("Admin");
await agregarRol("Voluntario");
await agregarRol("Anfitrion");

await agregarUsuario("Sas", "Mah Foo", "esteban.nicolas.sd@gmail.com", "1234", 1);
await agregarUsuario("Bryan", "Contreras", "bryan.contreras@gmail.com", "1234", 2);
await agregarUsuario("Ignacio", "Wallace", "ignacio.wallace@gmail.com", "1234", 3);

await agregarArea("Niños");
await agregarArea("Emergencias");
await agregarArea("Adulto Mayor");
await agregarArea("Animal");
await agregarArea("Discapacidad");
await agregarArea("Medio Ambiente");
await agregarArea("Talleres");
await agregarArea("Rural");
await agregarArea("Construccion");

await agregarVoluntariado("Enseñanza a niños de entre 5 a 8 años", "Valparaiso", "3 Semanas", "Turno Diurno, Enseñar, Limpieza", "2 comidas, habitacion compartida", 4, "./img/voluntariado/voluntariadoninos.jpeg", 1, 3);
await agregarVoluntariado("Cuidado de animales y niños", "Viña del Mar", "2 semanas", "Turno Diurno/nocturno, Cuidar, Limpieza", "3 comidas, Habitacion privada", 2, "./img/voluntariado/niños-perros.jpg", 4 ,3);
