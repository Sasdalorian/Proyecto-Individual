import bcrypt from "bcrypt";

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
};