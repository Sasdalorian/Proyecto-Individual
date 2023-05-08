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

        if (!nombre || !apellidos || !email || !pass) {
            // HACER SWEETALERT EN JS PUBLIC
            res.render("signUp");
            console.log("Campos de Voluntariado Vacios.");

        } else {
            let passE = bcrypt.hashSync(pass, 10);
            const cuerpo = { nombre, apellidos, email, passE };
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
        res.render("error", { "error": "Problemas al Registrar Voluntario." })
    }

}

//REGISTRAR ANFITRION
export const registrarAnf = async (req, res) => {
    try {
        const nombre = req.body.nombre;
        const apellidos = req.body.apellidos;
        const email = req.body.email;
        const pass = req.body.pass;

        if (!nombre || !apellidos || !email || !pass) {
            // HACER SWEETALERT EN JS PUBLIC
            res.render("signUp");
            console.log("Campos de Anfitrion Vacios.");

        } else {
            let passE = bcrypt.hashSync(pass, 10);
            const cuerpo = { nombre, apellidos, email, passE };

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
        res.render("error", { "error": "Problemas al Registrar Anfitrion." })
    }
};

// LOGIN USUARIO
export const inicioSesion = async (req, res) => {
    try {
        const { email, pass } = req.body;
        const cuerpo = { email, pass };

        // Verificar que los campos no estén vacíos
        if (!email || !pass) {
            console.log("Campos vacíos.");
            res.render("login");
        } else {
            const resultado = await fetch("http://localhost:4000/api/v1/iniciarSesion", {
                method: "POST",
                body: JSON.stringify(cuerpo),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // Verificar que la respuesta tenga el código 200 OK
            if (resultado.status === 200) {
                // Obtener el token de la respuesta
                const { token } = await resultado.json();
                console.log(token)
                // Almacenar el token en localStorage
                localStorage.setItem("authToken", token);

                console.log("Se ha iniciado sesión");
                res.redirect("perfil");
            } else {
                // Si la respuesta no es 200 OK, mostrar mensaje de error
                const { msg } = await resultado.json();
                res.render("login");
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Error en el servidor");
    }
};

// PARA OBTENER TOKEN Y USARLO DONDE REQUIERA
export const getToken = () => {
    return localStorage.getItem('authToken');
};

// CERRAR SESION = ELIMINAR TOKEN
export const cerrarSesion = async (req, res) => {
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
    console.log("Sesion cerrada")
    // Realiza cualquier otra acción necesaria después de cerrar sesión, como redirigir al usuario a la página de inicio de sesión
    res.redirect("login");
};