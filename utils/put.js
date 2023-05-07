import { __dirname } from "../index.js";
import path from "path";

// EDITAR VOLUNTARIADO
export const editarVoluntariado = async (req, res) => {
    try {
        const { tituloE, ubicacionE, areasE, duracionE, quehacerE, beneficioE, cantidadE } = req.body;
        console.log(req.body)
        const id = req.body.voluntariadoId;
        const imgA = req.files.imgE;
        console.log(imgA)
        const parentDir = path.resolve(__dirname, ".");
        const uploadPath = parentDir + "/public/img/imgUser/" + imgA.name;
        const img = "/img/imgUser/" + imgA.name;

        imgA.mv(uploadPath, function (err) {
            if (err)
                return res.status(500).send(err)
        })

        if (!tituloE || !ubicacionE || !areasE || !duracionE || !quehacerE || !beneficioE) {
            // HACER SWEETALERT EN JS PUBLIC
            res.redirect("adminTvoluntariados");
            console.log("Campos de Voluntariado Vacios.");
        } else {
            const cuerpo = { id, tituloE, ubicacionE, areasE, duracionE, quehacerE, beneficioE, cantidadE, img };

            const resultado = await fetch("http://localhost:4000/api/v1/editvolunt", {
                method: "PUT",
                body: JSON.stringify(cuerpo),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            res.redirect("adminTvoluntariados");
            console.log("Voluntariado Editado")
        }
    } catch (error) {
        res.render("error", { "error": "Problemas al Editar Voluntariado." })
    }
}

// EDITAR USUARIO
export const editarUsuario = async (req, res) => {
    try {
        const { id, nombreE, apellidosE, emailE, passE, idrolE, descripcionE } = req.body;
        const imgA = req.files.imgE
        const parentDir = path.resolve(__dirname, ".");
        const uploadPath = parentDir + "/public/img/imgUser/" + imgA.name;
        const img = "/img/imgUser/" + imgA.name;

        imgA.mv(uploadPath, function (err) {
            if(err)
            return res.status(500).send(err)
        })
        const cuerpo = { id, nombreE, apellidosE, emailE, passE, idrolE, descripcionE, img};
        const resultado = await fetch("http://localhost:4000/api/v1/editusuario", {
            method: "PUT",
            body: JSON.stringify(cuerpo),
            headers: {
                "Content-Type": "application/json"
            }
        });
        res.redirect("adminTusuarios");
        console.log("El usuario se ha editado correctamente")
    } catch (error) {
        res.render("error", { "error": "Problemas al Editar Usuario." })
    }
}

// EDITAR ADMIN
export const editarAdmin = async (req, res) => {
    try {
        const { id, nombreE, apellidosE, emailE, passE, descripcionE } = req.body;
        const imgA = req.files.imgE
        const parentDir = path.resolve(__dirname, ".");
        const uploadPath = parentDir + "/public/img/imgUser/" + imgA.name;
        const img = "/img/imgUser/" + imgA.name;

        imgA.mv(uploadPath, function (err) {
            if(err)
            return res.status(500).send(err)
        })
        const cuerpo = { id, nombreE, apellidosE, emailE, passE, descripcionE, img};
        const resultado = await fetch("http://localhost:4000/api/v1/editadmin", {
            method: "PUT",
            body: JSON.stringify(cuerpo),
            headers: {
                "Content-Type": "application/json"
            }
        });
        res.redirect("adminTadmin");
        console.log("El usuario se ha editado correctamente")
    } catch (error) {
        res.render("error", { "error": "Problemas al Editar Admin." })
    }
}