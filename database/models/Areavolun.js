import { sequelize } from "../data.js";
import { DataTypes, Model } from "sequelize";

export class Areavolun extends Model{};

Areavolun.init({
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    idArea: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    }
},
{
    sequelize,
    tableName: 'areavolun',
    createdAt: false,
    updatedAt: false
});