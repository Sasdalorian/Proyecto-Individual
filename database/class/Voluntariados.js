import { sequelize } from "../data.js";
import { DataTypes, Model } from "sequelize";

export class Voluntariados extends Model{};

Voluntariados.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.VARCHAR(25),
        allowNull: false,
    },
    ubicacion: {
        type: DataTypes.VARCHAR(100),
        allowNull: false
    },
    duracion: {
        type: DataTypes.VARCHAR(25),
        allowNull: false
    },
    quehacer: {
        type: DataTypes.VARCHAR(25),
        allowNull: false
    },
    beneficio: {
        type: DataTypes.VARCHAR(30),
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    img: {
        type: DataTypes.VARCHAR(255),
        allowNull: false
    }
},
{
    sequelize,
    tableName: 'voluntariados',
    createdAt: false,
    updatedAt: false,
    name: {
        singular: "voluntariado",
        plural: "voluntariados"
    }
});