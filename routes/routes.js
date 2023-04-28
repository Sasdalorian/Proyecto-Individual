// CLAUSULA ORDENAMIENTO Y AGRUPAMIENTO
// ORDER BY Y GROUP BY
// Documentacion COMENTAR EL CODIGO

// IMPORTS
import bodyParser from "body-parser";
import { Router } from "express";
import methodOverride from "method-override";

import { inicioSesion, registrarAnf, registrarVolunt } from "./userRoutes.js";
import { deleteVolunt } from "../utils/delete.js";
import { obtenerAdmin, obtenerUsuarios, obtenerVoluntariados } from "../utils/gets.js";


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

    // MOSTRAR VOLUNTARIADOS
router.get("/voluntariado", async (req, res) => {
  try {
    const voluntariados = await obtenerVoluntariados();
    res.render("voluntariado", {"voluntariados": voluntariados});
    } catch (error) {
      console.log(error);
      res.status(500).send("Error en el servidor");
      }
});
      
      // ADMINISTRACION VOLUNTARIADOS
router.get("/adminTvoluntariados", async (req, res) => {
  try {
    const voluntariados = await obtenerVoluntariados();
    res.render("adminTvoluntariados", {"voluntariados":voluntariados});
    } catch (error) {
      console.log(error);
      res.status(500).send("Error en el servidor");
    }
});

router.get("/adminTusuarios", async (req, res) => {
  try {
    const usuarios = await obtenerUsuarios();
    res.render("adminTusuarios", {"usuarios": usuarios})
    } catch (error) {
      console.log(error);
      res.status(500).send("Error en el servidor");
    }
});

router.get("/adminTadmin", async (req, res) => {
  try {
    try {
      const admin = await obtenerAdmin();
      res.render("adminTadmin", {"admin": admin})
      } catch (error) {
        console.log(error);
        res.status(500).send("Error en el servidor");
      }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
})

router.get("/api/v1/usuarios", obtenerUsuarios);
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