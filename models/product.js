
import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";


export const Product = sequelize.define("Product", {
    id: { primaryKey: true, type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 }, 
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    metaData: { type: DataTypes.JSON, allowNull: false },
},
{
    paranoid: true
});
export { sequelize }; 