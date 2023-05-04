import bcrypt from "bcrypt";
import { LocalStorage } from "node-localstorage";
const localStorage = new LocalStorage("./localStorage");

//REGISTRAR VOLUNTARIO
export const registrarVolunt = async (req, res) => {
    try {
        const nombre = req.body.nombre;
        const apellidos = req.body.apellidos;
        const email = req.body.email;
        const pass = req.body.pass;
        // const cuerpo = { nombre, apellidos, email, pass};

        if(!nombre || !apellidos || !email || !pass) {
            // HACER SWEETALERT EN JS PUBLIC
            res.render("signUp");
            console.log("Campos de Voluntariado Vacios.");

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

        if(!nombre || !apellidos || !email || !pass) {
            // HACER SWEETALERT EN JS PUBLIC
            res.render("signUp");
            console.log("Campos de Anfitrion Vacios.");

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

        //VERIFICAR QUE LOS CAMPOS NO ESTEN VACIOS
        if(!email || !pass) {
            // HACER SWEETALERT EN JS PUBLIC
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

            // Obtener el token de la respuesta
            const { token } = await resultado.json();

            // Almacenar el token en localStorage
            localStorage.setItem('authToken', token);

            try {
                console.log("Se ha iniciado sesion")
                res.redirect("perfil");
            } catch (error) {
                console.log(error);
                res.status(500).send("Error en el servidor");
            }
        }
    } catch (error) {
        res.render("login");
        console.log(error);
    }
};

export const getToken = () => {
    return localStorage.getItem('authToken');
};

export const cerrarSesion = async (req, res) => {
    console.log("Entramos a cerrar sesión?")
    const response = await fetch('http://localhost:4000/api/v1/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}` // Incluye el token de autenticación en el encabezado
      },
    });
    const data = await response.json();
    // Borra el token del almacenamiento del navegador
    localStorage.removeItem('authToken'); 
    // Realiza cualquier otra acción necesaria después de cerrar sesión, como redirigir al usuario a la página de inicio de sesión
    res.redirect("login");
};