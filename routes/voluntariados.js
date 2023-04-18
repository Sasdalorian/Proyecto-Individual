import express from "express";
import { Router } from "express";
import { Voluntariados } from "../database/models/Voluntariados";

const volunRouter = Router();

// CREATE
volunRouter.post("/", (req, res) => {
    Voluntariados.create({
        
    });
});