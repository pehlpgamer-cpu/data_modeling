import { Sequelize } from "sequelize";

export const mysqlConfig = new Sequelize("data_modeling", "root", "", {
  host: "localhost",
  dialect: "mysql"
});