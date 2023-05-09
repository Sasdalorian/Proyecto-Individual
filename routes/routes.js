// CLAUSULA ORDENAMIENTO Y AGRUPAMIENTO
// ORDER BY Y GROUP BY
// Documentacion COMENTAR EL CODIGO

// IMPORTS
import bodyParser from "body-parser";
import { Router } from "express";
import methodOverride from "method-override";
import fileUpload from "express-fileupload";

//Controladores
import { cerrarSesion, inicioSesion, registrarAnf, registrarVolunt, registrarVoluntariadoAnfi } from "../utils/post.js";
import { deleteAdmin, deleteUsuario, deleteVolunt } from "../utils/delete.js";
import { obtenerAdmin, obtenerUsuarios, obtenerVoluntariados, adminShowVolunt, obtenerEstadisticas, obtenerTopAreasAsc, obtenerTopAreasDesc } from "../utils/gets.js";
import { obtenerDatosPerfil, datosPerfil, adminMiddleware, userMiddleware, anfitrionMiddleware, voluntarioMiddleware } from "../utils/dataUser.js";
import { authMiddleware } from "../utils/auth.js"
import { editarAdmin, editarUsuario, editarVoluntariado } from "../utils/put.js";
import { registrarAdmin, registrarUsuario, registrarVoluntariado } from "../utils/postAdmin.js";

const router = Router();
router.use(fileUpload());
router.use(methodOverride("_method", { methods: ["POST", "GET", "PUT"] }));
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Paginas Principales sin uso de DataBase
router.get("/", async (req, res) => {
  await obtenerDatosPerfil();
  res.render("index", { datosPerfil });
});

router.get("/donacion", async (req, res) => {
  await obtenerDatosPerfil();
  res.render("donacion", { datosPerfil });
});
router.get("/login", async (req, res) => {
  await obtenerDatosPerfil();
  res.render("login", { datosPerfil });
});
router.get("/signUp", async (req, res) => {
  await obtenerDatosPerfil();
  res.render("signUp", { datosPerfil });
});

// MOSTRAR VOLUNTARIADOS
router.get("/voluntariado", async (req, res) => {
  try {
    await obtenerDatosPerfil();
    const voluntariados = await obtenerVoluntariados();
    res.render("voluntariado", { "voluntariados": voluntariados, datosPerfil });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
});

// Perfil
router.get("/perfil", authMiddleware, async (req, res) => {
  try {
    await obtenerDatosPerfil();
    res.render("perfil", { datosPerfil });
    console.log("Entrando a Perfil");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al obtener el perfil.");
  }
});
// INSCRIBIR VOLUNTARIADOS
router.get('/voluntariadosUser', voluntarioMiddleware, async (req, res) => {
  try {
    const datosPerfil = await obtenerDatosPerfil();
    console.log(datosPerfil);
    const voluntariados = await adminShowVolunt();
    res.render('voluntariadosUser', { voluntariados, datosPerfil }); // No entiendo porque no me deja ocupar datosPerfil en mi voluntariadosUser.hbs
  } catch (error) {
    console.log(error);
    res.redirect('login');
  }
});
// INSCRIBIR VOLUNTARIADOS
router.get('/voluntariadosAnfi', anfitrionMiddleware, async (req, res) => {
  try {
    await obtenerDatosPerfil();
    const voluntariados = await adminShowVolunt();
    res.render('voluntariadosAnfi', { voluntariados, datosPerfil })
  } catch (error) {
    res.redirect('login');
  }
})
// ADMINISTRACION VOLUNTARIADOS
router.get('/adminTvoluntariados', adminMiddleware, async (req, res) => {
  try {
    await obtenerDatosPerfil();
    const voluntariados = await adminShowVolunt();
    res.render('adminTvoluntariados', { 'voluntariados': voluntariados, datosPerfil });
  } catch (error) {
    console.log(error);
    res.redirect('login');
  }
});

// ADMINISTRACION DE USUARIOS
router.get("/adminTusuarios", adminMiddleware, async (req, res) => {
  try {
    const usuarios = await obtenerUsuarios();
    res.render("adminTusuarios", { "usuarios": usuarios, datosPerfil })
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
});

// Administracion de Admins
router.get("/adminTadmin", adminMiddleware, async (req, res) => {
  try {
    try {
      await obtenerDatosPerfil();
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
router.get("/adminEstadisticas", async (req, res) => {
  try {
    await obtenerDatosPerfil();
    const admin = await obtenerAdmin();
    const estadisticas = await obtenerEstadisticas();
    const topAreas = await obtenerTopAreasDesc();
    res.render("adminEstadisticas", { admin, datosPerfil, topAreas, estadisticas });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener las estadísticas");
  }
});
router.get("/adminEstadisticas/asc", async (req, res) => {
  try {
    await obtenerDatosPerfil();
    const admin = await obtenerAdmin();
    const estadisticas = await obtenerEstadisticas();
    const topAreas = await obtenerTopAreasAsc();
    res.render("adminEstadisticas", { admin, datosPerfil, topAreas, estadisticas });
  } catch (error) {
    res.status(500).send("Error al obtener las estadísticas");
  }
})
//POST
//REGISTRAR VOLUNTARIO
router.post("/registerVoluntario", registrarVolunt);
//REGISTRAR ANFITRION
router.post("/registerAnfitrion", registrarAnf);


//AGREGAR VOLUNTARIADO
router.post("/agregarVoluntariado", registrarVoluntariado);
//AGREGAR VOLUNTARIADO
router.post("/agregarVoluntariadoAnfi", registrarVoluntariadoAnfi);
//EDITAR VOLUNTARIADO
router.post("/editarVoluntariado", editarVoluntariado);
//AGREGAR Usuario
router.post("/agregarUsuario", registrarUsuario);
//EDITAR USUARIO
router.post("/editarUsuario", editarUsuario);
//AGREGAR ADMIN
router.post("/agregarAdmin", registrarAdmin);
//EDITAR ADMIN
router.post("/editarAdmin", editarAdmin);

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