import express from "express";
import hbs from "hbs";
import { dirname, join} from "path";
import {fileURLToPath} from "url";
import router from "./routes/routes.js";
import fileUpload from "express-fileupload";

export const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.set('view engine', 'hbs');
app.use(express.json());
router.use(fileUpload());
app.use(router);

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));
app.use(express.static(join(__dirname , "/node_modules/bootstrap/dist")));
app.use(express.static(join(__dirname , "/node_modules/sweetalert2/dist")));
app.use(express.static(join(__dirname , "/node_modules/normalize.css")));
hbs.registerPartials(join(__dirname , "/views/partials"));

app.listen(3000, (req, res) => {
    console.log('El server se ha conectado al puerto 3000;')
});