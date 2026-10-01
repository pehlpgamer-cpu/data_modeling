
import { Sequelize } from "sequelize";
import { sequelize } from "./models/db.js";
import { User } from "./models/userModel.js";
import inquirer from "inquirer";
import { mysqlConfig } from "./config.js";

const rootSequelize = mysqlConfig

const { createDb } = await inquirer.prompt([
  {
    type: "confirm",
    name: "createDb",
    message: "Database 'data_modeling' may not exist. Create it?",
    default: true,
  },
]);

if (createDb) {
  await rootSequelize.query("CREATE DATABASE IF NOT EXISTS data_modeling;");
  console.log("✅ Database created (if it did not exist)");
}

try {
  await sequelize.authenticate();
  console.log("✅ Connected to MySQL database!");
  await sequelize.sync({ force: true });
  console.log("✅ Tables created for all models!");
} catch (err) {
  console.error("❌ Migration failed:", err);
} finally {
  process.exit();
}
