// IMPORTS
import bodyParser from "body-parser";
import { Router } from "express";
import methodOverride from "method-override";


import { inicioSesion, registrarAnf, registrarVolunt } from "./userRoutes.js";
import { deleteVolunt } from "../utils/delete.js";
import { obtenerUsuarios, obtenerVoluntariados } from "../utils/gets.js";


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
      router.get("/administracion", async (req, res) => {
        try {
          const voluntariados = await obtenerVoluntariados();
          const usuarios = await obtenerUsuarios();
          const resultados = { voluntariados, usuarios };
          res.render("adminTvoluntariados", resultados);
        } catch (error) {
          console.log(error);
          res.status(500).send("Error en el servidor");
        }
      });

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