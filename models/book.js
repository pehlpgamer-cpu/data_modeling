
// Activity 2 - 2026-10-09
import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";


export const Book = sequelize.define("Book", {
    id: { primaryKey: true, type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 }, 
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    genre: { type: DataTypes.STRING, allowNull: false },
    pages: { type: DataTypes.INTEGER, allowNull: false },
    publishedAt: { type: DataTypes.DATE, allowNull: false },
},
{
    paranoid: true
});
export { sequelize }; 