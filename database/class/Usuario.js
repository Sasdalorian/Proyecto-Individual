import { sequelize } from "../data.js";
import { DataTypes, Model } from "sequelize";

import { Rol } from "./Rol.js"; 

export class Usuario extends Model{};

Usuario.init({

    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    pass: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
},
{
    sequelize,
    tableName: 'usuarios',
    createdAt: false,
    updatedAt: false,
    name: { 
        singular: "usuario",
        plural: "usuarios"
    }
});

Rol.hasMany(Usuario, {foreignKey: "idrol"});
Usuario.belongsTo(Rol, {foreignKey: "idrol"});

