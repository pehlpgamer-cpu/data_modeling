import { Sequelize } from "sequelize";

export const mysqlConfig = new Sequelize("data_modeling", "root", "mYNSn4qm6sgEez29agtW7dbfs7MG08YamNf8VPQfSaHxXssW26vXXa7drW3urJxn", {
  host: "localhost",
  dialect: "mysql"
});