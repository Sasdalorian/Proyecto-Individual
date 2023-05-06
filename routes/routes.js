// CLAUSULA ORDENAMIENTO Y AGRUPAMIENTO
// ORDER BY Y GROUP BY
// Documentacion COMENTAR EL CODIGO

// IMPORTS
import bodyParser from "body-parser";
import { Router } from "express";
import methodOverride from "method-override";
import fileUpload from "express-fileupload";

//Controladores
import { cerrarSesion, inicioSesion, registrarAnf, registrarVolunt } from "../utils/post.js";
import { deleteAdmin, deleteUsuario, deleteVolunt } from "../utils/delete.js";
import { obtenerAdmin, obtenerUsuarios, obtenerVoluntariados, topAreas, adminShowVolunt } from "../utils/gets.js";
import { obtenerDatosPerfil, datosPerfil } from "../utils/DataUser.js";
import { authMiddleware } from "../utils/auth.js"
import { editarVoluntariado } from "../utils/put.js";
import { registrarUsuario, registrarVoluntariado } from "../utils/postAdmin.js";

const router = Router();
router.use(fileUpload());
router.use(methodOverride("_method", { methods: ["POST", "GET", "PUT"] }));
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Paginas Principales sin uso de DataBase
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

// Perfil
router.get("/perfil", authMiddleware, async (req, res) => {
  try {
    await obtenerDatosPerfil(req, res);
    res.render("perfil", {datosPerfil});
    console.log("Entrando a Perfil");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al obtener el perfil.");
  }
});

// MOSTRAR VOLUNTARIADOS
router.get("/voluntariado", async (req, res) => {
  try {
    const voluntariados = await obtenerVoluntariados();
    res.render("voluntariado", { "voluntariados": voluntariados });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
});

// ADMINISTRACION VOLUNTARIADOS
router.get('/adminTvoluntariados', authMiddleware, async (req, res) => {
  try {
    await obtenerDatosPerfil(req, res);
    const voluntariados = await adminShowVolunt();
    res.render('adminTvoluntariados', { 'voluntariados': voluntariados, datosPerfil });
  } catch (error) {
    console.log(error);
    res.redirect('login');
  }
});

// ADMINISTRACION DE USUARIOS
router.get("/adminTusuarios", authMiddleware, async (req, res) => {
  try {
    const usuarios = await obtenerUsuarios();
    const admin = await obtenerAdmin();
    res.render("adminTusuarios", { "usuarios": usuarios, datosPerfil })
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
});

// Administracion de Admins
router.get("/adminTadmin", authMiddleware, async (req, res) => {
  try {
    try {
      await obtenerDatosPerfil(req, res);
      const admin = await obtenerAdmin();
      res.render("adminTadmin", { "admin": admin, datosPerfil })
    } catch (error) {
      console.log(error);
      res.status(500).send("Error en el servidor");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
})

// MUESTRA TOP AREAS
router.get("/adminEstadisticas", authMiddleware, async (req, res) => {
  try {
    const topAreasData = await topAreas();
    const admin = await obtenerAdmin();
    res.render("adminEstadisticas", { topAreas: topAreasData, datosPerfil });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// MUESTRA TOP AREAS DE FORMA ASC O DESC
router.get("/top/topAreas/:direccion?", authMiddleware, async (req, res) => {
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

//POST
//REGISTRAR VOLUNTARIO
router.post("/registerVoluntario", registrarVolunt);
//REGISTRAR ANFITRION
router.post("/registerAnfitrion", registrarAnf);


//AGREGAR VOLUNTARIADO
router.post("/agregarVoluntariado", registrarVoluntariado);
//EDITAR VOLUNTARIADO
router.post("/editarVoluntariado", editarVoluntariado);
//AGREGAR Usuario
router.post("/agregarUsuario", registrarUsuario);


// LOGIN USUARIO
router.post("/iniciarSesion", inicioSesion);
// LOGOUT USUARIO
router.post("/logout", cerrarSesion);



//DELETE
router.delete("/deletevolunt/:id", deleteVolunt);
router.delete("/deleteusuario/:id", deleteUsuario);
router.delete("/deleteadmin/:id", deleteAdmin);

// EXPORT
export default router;