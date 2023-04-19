import { sequelize } from "../data.js";
import { DataTypes, Model } from "sequelize";

import { Voluntariados } from "./Voluntariados.js";
import { Areas } from "./Areas.js";

export class Areavolunt extends Model{};

Areavolunt.init({
    voluntariadoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    areaId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    }
},
{
    sequelize,
    tableName: 'areavolunt',
    createdAt: false,
    updatedAt: false,
    name: { 
        singular: "areavolunt",
        plural: "areavolunt"
    }
});

Voluntariados.belongsToMany(Areas, {through: Areavolunt});
Areas.belongsToMany(Voluntariados, {through: Areavolunt})

// Voluntariados.hasMany(Areavolunt);
// Areavolunt.belongsTo(Voluntariados);

// Areas.hasMany(Areavolunt);
// Areavolunt.belongsTo(Areas);