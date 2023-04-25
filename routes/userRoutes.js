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
        const nombre = req.body.nombre;
        const apellidos = req.body.apellidos;
        const email = req.body.email;
        const pass = req.body.pass;
        // const cuerpo = { nombre, apellidos, email, pass};

        if(!nombre || !apellidos || !email || !pass) {
            // AGREGAR SWEETALERT 2
            res.render("signUp");
            console.log("no pasamos");

        } else {
            let passE = bcrypt.hashSync(pass, 10);
            const cuerpo = {nombre, apellidos, email, passE};
            const resultado = await fetch("http://localhost:4000/api/v1/registerVoluntario", {
                method: "POST",
                body: JSON.stringify(cuerpo),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            res.render("login");
        }
    } catch (error) {
        res.render("error", {"error": "Problemas al Registrar Voluntario."})
    }

}

//REGISTRAR ANFITRION
export const registrarAnf = async (req,res) => {
    try {
        const nombre = req.body.nombre;
        const apellidos = req.body.apellidos;
        const email = req.body.email;
        const pass = req.body.pass;
        // const cuerpo = { nombre, apellidos, email, pass};

        if(!nombre || !apellidos || !email || !pass) {
            // AGREGAR SWEETALERT 2
            res.render("signUp");
            console.log("no pasamos");

        } else {
            let passE = bcrypt.hashSync(pass, 10);
            const cuerpo = {nombre, apellidos, email, passE};

            const resultado = await fetch("http://localhost:4000/api/v1/registerAnfitrion", {
                method: "POST",
                body: JSON.stringify(cuerpo),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            res.render("login");
        }
    } catch (error) {
        res.render("error", {"error": "Problemas al Registrar Anfitrion."})
    }
};

// LOGIN USUARIO
export const inicioSesion = async (req,res) => {
    try {
        const { email, pass } = req.body;
        const cuerpo = { email, pass };

        if(!email || !pass) {
            console.log("Campos Vacios.")
            res.render("login");
        } else {
            const resultado = await fetch("http://localhost:4000/api/v1/iniciarSesion", {
                method: "POST",
                body: JSON.stringify(cuerpo),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const token = await resultado.json();
            console.log(token)
            if(resultado.ok) {
                const administracionJson = await fetch("http://localhost:4000/api/v1/administracion");
                const data = await administracionJson.json();
                console.log("pasamoo");
                res.render("administracion", {"voluntariados":data});
            } else {
                console.log("Email o contraseña incorrecta")
                res.render("login", { error: "Email o contraseña incorrecta" });
            }
        }
    } catch (error) {
        res.render("login");
        console.log(error);
    }
};