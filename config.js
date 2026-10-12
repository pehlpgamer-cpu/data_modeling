import 'dotenv/config' 
import { Sequelize } from "sequelize";

export const mysqlConfig = new Sequelize(
  process.env.MYSQL_DATABASE, 
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT ?? 3306),
    dialect: "mysql",
    logging: false,
  },
);