const { sq } = require("../utils/PoolConnection");
const { DataTypes } = require("sequelize");

const UserDetail = sq.define("users", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.DATE,
    },
    created_at: {
      type: DataTypes.DATE,
    },    
  }, {
      freezeTableName: true,
      timestamps: false
  });
  
  (async () => {
    await sq.sync();
    
  })();
  
  module.exports = UserDetail;