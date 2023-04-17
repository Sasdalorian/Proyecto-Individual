// IMPORTS
import express from "express";
import hbs from "hbs";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import session from "express-session";
import bycryptjs from "bcryptjs";
import { sequelize } from "../database/data.js";
import { Router } from "express";

const router = Router();

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