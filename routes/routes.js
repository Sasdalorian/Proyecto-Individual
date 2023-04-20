// IMPORTS
import express from "express";
import bodyParser from "body-parser";
import { Router } from "express";


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

router.get("/voluntariado", async (req, res) => {
    const resultado = await fetch("http://localhost:4000/api/v1/voluntariados");
    const data = await resultado.json();
    res.render("voluntariado", {"voluntariados":data});
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/signUp", (req, res) => {
    res.render("signUp");
});

// POST
app.post("api/v1/registerVoluntario", async (req, res) => {
    res.send("Entramoss")
})

// EXPORT
export default router;