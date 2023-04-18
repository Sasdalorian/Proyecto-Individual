import express from "express";
import { Router } from "express";
import { Usuario } from "../database/models/Usuario.js";

const userRouter = Router();

// CREATE /api/users    // VOLUNTARIOS
userRouter.post("/", (req, res) => {
    Usuario.create({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        pass: req.body.pass,
        idrol: 2
    })
})

export default userRouter;