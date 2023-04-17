import { sequelize } from "../data.js";
import { DataTypes, Model } from "sequelize";

import { Usuario } from "./Usuario.js";
import { Areas } from "./Areas.js";

export class Voluntariados extends Model{};

Voluntariados.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    ubicacion: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    duracion: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    quehacer: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    beneficio: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING(255),
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

Areas.belongsTo(Voluntariados, {foreignKey: "idareas"});
Voluntariados.belongsTo(Areas, {foreignKey: "idareas"});

Usuario.belongsTo(Voluntariados, {foreignKey: "id_usuario"});
Voluntariados.belongsTo(Usuario, {foreignKey: "id_usuario"});