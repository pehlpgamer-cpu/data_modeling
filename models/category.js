
import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

export const Category = sequelize.define("Category", {
    id: { primaryKey: true, type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 }, 
    category: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    sellerId: { type: DataTypes.INTEGER, allowNull: false },
    metaData: { type: DataTypes.JSON, allowNull: false },
},
{
    paranoid: true
});
export { sequelize }; 