
import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

export const InventoryItem = sequelize.define("InventoryItem", {
    id: { primaryKey: true, type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 }, 
    productId: { type: DataTypes.INTEGER, allowNull: false },
    returnedAt: { type: DataTypes.DATE,  allowNull: false},
    userId: { type: DataTypes.INTEGER,  allowNull: false},
    metaData: { type: DataTypes.JSON, allowNull: false },
},
{
    paranoid: true
});
export { sequelize }; 