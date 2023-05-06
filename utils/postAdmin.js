import bcrypt from "bcrypt";
import { __dirname } from "../index.js";
import path from "path";

// REGISTRAR USUARIO
export const registrarUsuario = async (req, res) => {
    try {
        const { nombre, apellidos, email, pass, idrol, descripcion } = req.body;
        console.log(req.body);
        let passE = bcrypt.hashSync(pass, 10);
        console.log(passE)
        const imgA = req.files.img;

        const parentDir = path.resolve(__dirname, ".");
        const uploadPath = parentDir + "/public/img/imgUser/" + imgA.name;
        const img = "/img/imgUser/" + imgA.name;
        imgA.mv(uploadPath, function (err) {
            if (err)
                return res.status(500).send(err)
        });
        
        const cuerpo = { nombre, apellidos, email, passE, idrol, img, descripcion };
        console.log(cuerpo)
        const resultado = await fetch("http://localhost:4000/api/v1/addusuario", {
            method: "POST",
            body: JSON.stringify(cuerpo),
            headers: {
                "Content-Type": "application/json"
            }
        });
        res.redirect("adminTusuarios");
        console.log("Usuario Añadido");

    } catch (error) {
        console.log("No se pudo registrar el Usuario");
        res.redirect("adminTusuarios");
    }
};

//REGISTRAR Voluntariado
export const registrarVoluntariado = async (req, res) => {
    try {
        const { titulo, ubicacion, areas, duracion, quehacer, beneficio, cantidad } = req.body;
        const imgA = req.files.img;
        const parentDir = path.resolve(__dirname, ".");
        const uploadPath = parentDir + "/public/img/voluntariado/" + imgA.name;
        const img = "/img/voluntariado/" + imgA.name;

        if (!titulo || !ubicacion || !areas || !duracion || !quehacer || !beneficio || !imgA) {
            // HACER SWEETALERT EN JS PUBLIC
            res.redirect("adminTvoluntariados");
            console.log("Campos de Voluntariado Vacios.");
        } else {
            imgA.mv(uploadPath, function (err) {
                if (err)
                    return res.status(500).send(err)
            })

            const cuerpo = { titulo, ubicacion, areas, duracion, quehacer, beneficio, cantidad, img };

            const resultado = await fetch("http://localhost:4000/api/v1/addvolunt", {
                method: "POST",
                body: JSON.stringify(cuerpo),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            res.redirect("adminTvoluntariados");
            console.log("Voluntariado Añadido")
        }
    } catch (error) {
        console.log("No se pudo registrar el voluntariado")
    }
};