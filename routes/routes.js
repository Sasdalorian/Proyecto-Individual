// IMPORTS
import bodyParser from "body-parser";
import { Router } from "express";
import methodOverride from "method-override";

import { inicioSesion, registrarAnf, registrarVolunt, mostrarPerfil } from "./userRoutes.js";
import { mostrarVolunt } from "./volunRoutes.js";
import { adminShowVolunt, deleteVolunt } from "./adminRoutes.js";

const router = Router();

router.use(methodOverride("_method", {methods: ["POST"]}));
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
    // MOSTRAR USUARIO
router.get("/perfilUser", mostrarPerfil);
    // MOSTRAR VOLUNTARIADOS
router.get("/voluntariado", mostrarVolunt);

    // ADMINISTRACION VOLUNTARIADOS
router.get("/administracion", adminShowVolunt);

//POST
    //REGISTRAR VOLUNTARIO
router.post("/registerVoluntario", registrarVolunt);
    //REGISTRAR ANFITRION
router.post("/registerAnfitrion", registrarAnf);
    // LOGIN USUARIO
router.post("/iniciarSesion", inicioSesion);

//DELETE
router.delete("/deletevolunt/:id", deleteVolunt);

// router.get("/voluntariado", async (req, res) => {
//     const resultado = await fetch("http://localhost:4000/api/v2/voluntariados");
//     const data = await resultado.json();
//     res.render("voluntariado", {"voluntariados": data});
// })

// EXPORT
export default router;