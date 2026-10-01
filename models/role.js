
import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

export const Role = sequelize.define("Role", {
    id: { primaryKey: true, type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 }, 
    role: { type: DataTypes.STRING, allowNull: false },
    roleDescription: {type: DataTypes.STRING, allowNull: true},
    subRole: {type: DataTypes.STRING, allowNull: true},
    subRoleDescription: {type: DataTypes.STRING, allowNull: true}
},
{
    paranoid: true
});
export { sequelize }; 