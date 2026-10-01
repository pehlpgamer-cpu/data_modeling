
import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

export const AuditTrail = sequelize.define("AuditTrail", {
    id: { primaryKey: true, type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 }, 
    action: { type: DataTypes.STRING, allowNull: false },
    oldData: { type: DataTypes.STRING, allowNull: false },
    newData: { type: DataTypes.STRING, allowNull: false },
    metaData: { type: DataTypes.JSON, allowNull: false },
},
{
    paranoid: true
});
export { sequelize }; 