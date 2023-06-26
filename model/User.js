const { sq } = require("../utils/PoolConnection");
const { DataTypes } = require("sequelize");

const User = sq.define("mda_clean", {
  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  no: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  dde_spoke_team: {
    type: DataTypes.INTEGER,
  },
  pi_joined__status_: {
    type: DataTypes.STRING,
  },
  guild_team: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
  clv_start: {
    type: DataTypes.STRING,
  },
  looker_start: {
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
  email__gmail_: {
    type: DataTypes.STRING,
  },
  email__one_: {
    type: DataTypes.STRING,
  },
  email__cyberlogitec_: {
    type: DataTypes.STRING,
  },
  phone_number: {
    type: DataTypes.STRING,
  },
  jira_name: {
    type: DataTypes.STRING,
  },
  jira_id: {
    type: DataTypes.STRING,
  },
  github_account: {
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