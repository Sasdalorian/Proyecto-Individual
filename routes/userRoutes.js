import bcrypt from "bcrypt";

// MOSTRAR PERFIL
export const mostrarPerfil = async (req, res) => {
    const resultado = await fetch("http://localhost:4000/api/v1/usuarios");
const data = await resultado.json();
res.render("perfilUser", {"Usuarios":data});
};

//REGISTRAR VOLUNTARIO
export const registrarVolunt = async (req, res) => {
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
    } catch (error) {
        res.render("error", {"error": "Problemas al Registrar Anfitrion."})
    }
    res.render("index");
}

//REGISTRAR ANFITRION
export const registrarAnf = async (req,res) => {
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
        res.render(error)
    }
    res.render("index");
};

// LOGIN USUARIO
export const inicioSesion = async (req,res) => {
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
        console.log(error);
    }
    const resultado = await fetch("http://localhost:4000/api/v1/administracion");
    const data = await resultado.json();
    res.render("administracion", {"voluntariados":data});
};