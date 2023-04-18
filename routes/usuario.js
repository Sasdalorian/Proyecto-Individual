import express from "express";
import { Router } from "express";
import { Usuario } from "../database/models/Usuario.js";

const userRouter = Router();

// CREATE /api/users    // VOLUNTARIOS
userRouter.post("/registerVoluntario", (req, res) => {
    Usuario.create({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        pass: req.body.pass,
        idrol: 2
    })
    res.redirect("/");
});

// CREATE /api/users    // ANFITRION
userRouter.post("/registerAnfitrion", (req,res) => {
    Usuario.create({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        pass: req.body.pass,
        idrol: 3
    })
    res.redirect("/");
});

export default userRouter;