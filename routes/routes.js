// IMPORTS
import express from "express";
import bodyParser from "body-parser";
import hbs from "hbs";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import session from "express-session";
import { sequelize } from "../database/data.js";
import { Router } from "express";
import { Usuario } from "../database/models/Usuario.js";


const router = Router();
router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());

// GET
router.get("/", (req, res) => {
     res.render("index");
});
router.get("/donacion", (req, res) => {
    res.render("donacion");
});
router.get("/voluntariado", (req, res) => {
    res.render("voluntariado");
});
router.get("/login", (req, res) => {
    res.render("login");
});
router.get("/signUp", (req, res) => {
    res.render("signUp");
});

// EXPORT
export default router;