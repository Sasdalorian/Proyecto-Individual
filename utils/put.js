import { __dirname } from "../index.js";
import path from "path";

// EDITAR VOLUNTARIADO
export const editarVoluntariado = async (req, res) => {
    try {
        const id = req.body.voluntariadoId;
        const titulo = req.body.tituloE;
        const ubicacion = req.body.ubicacionE;
        const areas = req.body.areasE;
        const duracion = req.body.duracionE;
        const quehacer = req.body.quehacerE;
        const beneficio = req.body.beneficioE;
        const cantidad = req.body.cantidadE;
        const imgA = req.files.imgE;
        
        const parentDir = path.resolve(__dirname, ".");
        const uploadPath = parentDir + "/public/img/imgUser/" + imgA.name;
        const img = "/img/imgUser/" + imgA.name;

        imgA.mv(uploadPath, function(err) {
            if(err)
            return res.status(500).send(err)
        })

        if (!titulo || !ubicacion || !areas || !duracion || !quehacer || !beneficio) {
            // HACER SWEETALERT EN JS PUBLIC
            res.redirect("adminTvoluntariados");
            console.log("Campos de Voluntariado Vacios.");

        } else {
            const cuerpo = { id, titulo, ubicacion, areas, duracion, quehacer, beneficio, cantidad, img };

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