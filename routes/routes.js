// IMPORTS
import express from "express";
import bodyParser from "body-parser";
import { Router } from "express";
import bcrypt from "bcrypt";

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



    // MOSTRAR VOLUNTARIADOS
router.get("/voluntariado", async (req, res) => {
    const resultado = await fetch("http://localhost:4000/api/v1/voluntariados");
    const data = await resultado.json();
    res.render("voluntariado", {"voluntariados":data});
});


    // REGISTRAR USUARIOS
//REGISTRAR VOLUNTARIO
router.post("/registerVoluntario", async (req, res) => {
    try {
        const { nombre, apellidos, email } = req.body;
        let pass = bcrypt.hashSync(req.body.pass, 10)
        const cuerpo = { nombre, apellidos, email, pass}

        const resultado = await fetch("http://localhost:4000/api/v1/registerVoluntario", {
            method: "POST",
            body: JSON.stringify(cuerpo),
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        res.render("error", {"error": "Problemas al Registrar Usuario."})
    }
});
//REGISTRAR ANFITRION
router.post("/registerAnfitrion", async (req, res) => {
    try {
        const { nombre, apellidos, email } = req.body;
        let pass = bcrypt.hashSync(req.body.pass, 10);
        const cuerpo = { nombre, apellidos, email, pass};

        const resultado = await fetch("http://localhost:4000/api/v1/registerAnfitrion", {
            method: "POST",
            body: JSON.stringify(cuerpo),
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(cuerpo)
    } catch (error) {
        res.render("error", {"error": "Problemas al Registrar Anfitrion."})
    }
});

    // LOGIN USUARIO
router.post("/iniciarSesion", async(req, res) => {
    try {
        const { email, pass } = req.body;
        const cuerpo = { email, pass };
        const resultado = await fetch("http://localhost:4000/api/v1/iniciarSesion", {
            method: "POST",
            body: JSON.stringify(cuerpo),
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        
    }
})



// router.get("/voluntariado", async (req, res) => {
//     const resultado = await fetch("http://localhost:4000/api/v2/voluntariados");
//     const data = await resultado.json();
//     res.render("voluntariado", {"voluntariados": data});
// })

// EXPORT
export default router;