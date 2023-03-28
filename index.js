import express from "express";
import hbs from "hbs";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import dotenv from "dotenv";
import session from "express-session";
import bycryptjs from "bcryptjs";
import conexion from "./database/db.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
dotenv.config({path:'./env/.env'});

app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}))

app.use(express.static(join(__dirname , "/node_modules/bootstrap/dist")));
app.use(express.static(join(__dirname , "/node_modules/sweetalert2/dist")));
app.use(express.static(join(__dirname , "/node_modules/normalize.css")));
hbs.registerPartials(join(__dirname , "/views/partials"));

app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}))


app.listen(3000, (req, res) => {
    console.log('El server se ha conectado al puerto 3000;')
});

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/donacion", (req, res) => {
    res.render("donacion");
});
app.get("/voluntariado", (req, res) => {
conexion.query('SELECT * FROM tvolun', (error, results) => {
        if(error) {
            throw error;
        } else {
            res.render("voluntariado", {results});
        }
    })
})

// REGISTER //
app.get("/signup", (req, res) => {
    res.render("signUp");
});
app.post("/register", async (req,res) => {
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const email = req.body.email;
    const usuario = req.body.usuario;
    const pass = req.body.pass;
    let passwordHaash = await bycryptjs.hash(pass, 8);

    if ( nombre == '' || apellidos == '' || email == '' || usuario == '' || pass == '') {
        console.log('Campos Vacios');
    } else {
        conexion.query('INSERT INTO Usuario SET ?', {nombre:nombre, apellidos:apellidos, correo:email, usuario:usuario, pass:passwordHaash},
        (error, results) => {
            if(error){
                console.log(error);
            } else {
                res.render("index");
                console.log('Registro Exitoso');
            }
        })
    }
})

 // LOGIN //
app.get("/login", (req, res) => {
    res.render("login");
});
app.post("/auth", async (req,res) => {
    const user = req.body.username;
    const pass = req.body.pass;
    let passwordHaash = await bycryptjs.hash(pass, 8);

    if(user && pass){
        conexion.query('SELECT * FROM Usuario WHERE usuario = ?', [user], async (error, results) => {
            console.log(results)
            if(results.length == 0 || !(await bycryptjs.compare(pass, results[0].pass))){
                res.send('Usuario y/o Password Incorrectas');
            } else {
                res.send('Login correcto');
            }
        });

}})
