// IMPORTS
import express from "express";
import bodyParser from "body-parser";
import { Router } from "express";
import bcrypt from "bcrypt";

import { inicioSesion, registrarAnf, registrarVolunt } from "./userRoutes.js";
import { mostrarVolunt } from "./volunRoutes.js";

const router = Router();
const app = express();

router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());

// GET
router.get("/", async (req, res) => {
    res.render("index");
});

router.get("/donacion", (req, res) => {
    res.render("donacion");
});
router.get("/login", (req, res) => {
    res.render("login");
});
router.get("/signUp", (req, res) => {
    res.render("signUp");
});

router.get("/prueba", (req, res) => {
    // SOLO ENTRAR SI INICIO SESION
    res.render("prueba");
});

    // MOSTRAR VOLUNTARIADOS
router.get("/voluntariado", mostrarVolunt);

    //REGISTRAR VOLUNTARIO
router.post("/registerVoluntario", registrarAnf);
    //REGISTRAR ANFITRION
router.post("/registerAnfitrion", registrarVolunt);

    // LOGIN USUARIO
router.post("/iniciarSesion", inicioSesion);



// router.get("/voluntariado", async (req, res) => {
//     const resultado = await fetch("http://localhost:4000/api/v2/voluntariados");
//     const data = await resultado.json();
//     res.render("voluntariado", {"voluntariados": data});
// })

// EXPORT
export default router;