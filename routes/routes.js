// CLAUSULA ORDENAMIENTO Y AGRUPAMIENTO
// ORDER BY Y GROUP BY
// Documentacion COMENTAR EL CODIGO

// IMPORTS
import bodyParser from "body-parser";
import { Router } from "express";
import methodOverride from "method-override";

//Controladores
import { inicioSesion, registrarAnf, registrarVolunt } from "../utils/post.js";
import { deleteVolunt } from "../utils/delete.js";
import { obtenerAdmin, obtenerUsuarios, obtenerVoluntariados, topAreas } from "../utils/gets.js";


const router = Router();

router.use(methodOverride("_method", {methods: ["POST"]}));
router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());

// Paginas Principales sin uso de DB
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

// MUESTRA TOP AREAS
router.get("/adminEstadisticas", async (req, res) => {
  try {
    const topAreasData = await topAreas();
    res.render("adminEstadisticas", { topAreas: topAreasData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// MUESTRA TOP AREAS DE FORMA ASC O DESC
router.get("/top/topAreas/:direccion?", async (req, res) => {
  try {
      const direccion = req.params.direccion || "asc"; // Si no se especifica la dirección, se asume que es "asc"
      const url = direccion === "desc" ? "topAreasDesc" : "topAreasAsc";
      const resultado = await fetch(`http://localhost:4000/api/v1/top/${url}`);
      const topAreas = await resultado.json();
      res.render("adminEstadisticas", { topAreas });
  } catch (error) {
      console.log(error);
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
// ADMINISTRACION DE USUARIOS
router.get("/adminTusuarios", async (req, res) => {
  try {
    const usuarios = await obtenerUsuarios();
    res.render("adminTusuarios", {"usuarios": usuarios})
    } catch (error) {
      console.log(error);
      res.status(500).send("Error en el servidor");
    }
});
// Administracion de Admins
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


  //POST
//REGISTRAR VOLUNTARIO
router.post("/registerVoluntario", registrarVolunt);
//REGISTRAR ANFITRION
router.post("/registerAnfitrion", registrarAnf);
// LOGIN USUARIO
router.post("/iniciarSesion", inicioSesion);




  //PUT  // ARREGLAR
router.put("/editvolunt/:id");

  //DELETE
router.delete("/deletevolunt/:id", deleteVolunt);

// EXPORT
export default router;