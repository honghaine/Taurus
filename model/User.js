const { sq } = require("../utils/PoolConnection");
const { DataTypes } = require("sequelize");

const User = sq.define("main_modified", {
  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  dde_spoke_team: {
    type: DataTypes.INTEGER,
  },
  pi_joined_status: {
    type: DataTypes.STRING,
  },
  guild_team: {
    type: DataTypes.STRING,
  },
  dob: {
    type: DataTypes.STRING,
  },
  english_name: {
    type: DataTypes.STRING,
  },
  full_name: {
    type: DataTypes.STRING,
  },
  phone_number: {
    type: DataTypes.STRING,
  },
  picture: {
    type: DataTypes.STRING,
  },

        
}, {
    freezeTableName: true,
    timestamps: false
});

(async () => {
  await sq.sync();
  
})();

module.exports = User;