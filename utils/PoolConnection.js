const { Sequelize } = require("sequelize");
const env = require("../env/properties.json");


const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  schema: env.schema, // Change this to your desired schema
});

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sq: sequelize, testDbConnection };
