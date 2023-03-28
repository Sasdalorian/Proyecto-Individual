import mysql from "mysql";

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'proyectoind',
    user: 'root',
    password: '1234'
});

conexion.connect(function(error){
    if(error){
        throw error;
    } else {
        conexion.query('SELECT * FROM tvolun', (error, results) => {
            if(error) {
                throw error;
            } else {
                console.log('DB connected')
            }
        })
        console.log('Conexion Exitosa');
    }
});

export default conexion;