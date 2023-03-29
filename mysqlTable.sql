CREATE SCHEMA ProyectoInd;
USE ProyectoInd;

CREATE TABLE Usuario (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
	correo VARCHAR(100) NOT NULL UNIQUE,
	usuario VARCHAR(25) NOT NULL UNIQUE,
    pass VARCHAR(255) NOT NULL,
    Tvolun_idTvolun INT 
);

CREATE TABLE Anfitrion(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    rut VARCHAR(50) NOT NULL UNIQUE,
    region VARCHAR(50) NOT NULL UNIQUE,
    comuna VARCHAR(50) NOT NULL,
    tel INT NOT NULL,
    pass VARCHAR(20) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE Tvolun (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    area VARCHAR(50) NOT NULL,
    ubicacion VARCHAR(150) NOT NULL,
    duracion VARCHAR(50) NOT NULL,
    quehacer VARCHAR(150) NOT NULL,
    beneficio VARCHAR(150) NOT NULL,
    cantidad INT NOT NULL,
    img VARCHAR(150) NOT NULL,
    anfitrion_idanfitrion INT
);

SELECT * FROM anfitrion;
SELECT * FROM tvolun;

ALTER TABLE tvolun ADD FOREIGN KEY (anfitrion_idanfitrion) REFERENCES anfitrion(id);
ALTER TABLE usuario ADD FOREIGN KEY (Tvolun_idTvolun) REFERENCES Tvolun(id);


INSERT INTO anfitrion (nombre, apellido, rut, region, comuna, tel, pass, correo) VALUES
	("Sas", "MahFoo", "19774842-7", "Valparaiso", "Valparaiso", 946298651, "1234", "esteban.nicolas.sd@gmail.com");
    
INSERT INTO tvolun (titulo, area, ubicacion, duracion, quehacer, beneficio, cantidad, img, anfitrion_idanfitrion) VALUES
	("Enseñanza a niños de entre 5 a 8 años", "Niños", "Valparaiso", "3 Semanas", "'Turno Diurno', 'Enseñar', 'Limpieza'", "'2 comidas', 'habitacion compartida'", 4, "./img/voluntariado/voluntariadoninos.jpeg", 1),
    ("Cuidado de animales y niños", '"Animales", "Niños"', "Viña del Mar", "2 semanas", '"Turno Diurno/nocturno", "Cuidar", "Limpieza"', '"3 comidas", "Habitacion privada"', 1, "./img/voluntariado/niños-perros.jpg", 1),
    ("Bioconstruccion y mantenimiento", "Construccion", "Laguna Verde", "Al menos 2 semanas", '"Turno Diurno", "Construccion", "Limpieza", "Pintura y Decoracion", "Mantenimiento"', '"1 comida", "habitacion compartida"', 8, "./img/voluntariado/construccion.jpg", 1),
	("Cuidado de Adultos Mayores", "Adultos Mayores", "Viña del Mar", "1 semana", '"Turno Diurno", "Cuidar", "Limpieza"', '"1 comida", "Habitacion privada"', 2, "./img/voluntariado/adultomayor.jpg", 1),
    ("Cuidado de Adultos Mayor con discapacidad", '"Adultos Mayores", "Discapacidad"', "Villa Alemana", "3 semanas", '"Turno Diurno y Nocturno", "Cuidar", "Limpieza"', '"2 comidas", "Habitacion compartida"', 2, "./img/voluntariado/adultomayordiscapacitado.jpg", 1),
	("Ayuda en labores de campo", '"Rural", "Animales"', "Olmue", "2 semanas", '"Turno Diurno y Nocturno", "Cuidar", "Limpieza"', '"2 comidas", "Habitacion compartida"', 4, "./img/voluntariado/rural.jpg", 1),
    ("Ayuda Teleton 2023", "Discapacidad", "Valparaiso", "2 semanas", '"Turno Diurno", "Cuidar", "Enseñar"', '"2 comidas", "Habitacion compartida"', 6, "./img/voluntariado/teleton.jpg", 1),
    ("$", '"Talleres", "Construccion", "Medio Ambiente"', "Laguna Verde", "2 semanas", '"Turno Diurno y Nocturno", "Cuidar", "Limpieza"', '"2 comidas", "Habitacion compartida"', 4, "$", 1),
    ("Cuidado de adultos mayores en hospital Van Buren", '"Adultos Mayores", "Emergencias"', "Valparaiso", "2 semanas", '"Turno Diurno y Nocturno", "Cuidar", "Limpieza"', '"2 comidas", "Habitacion compartida"', 4, "./img/voluntariado/abuelohosp.png", 1);
    
    
SELECT * FROM usuario;
    
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';
FLUSH PRIVILEGES;