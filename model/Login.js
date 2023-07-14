const { sq } = require("../utils/PoolConnection");
const { DataTypes } = require("sequelize");

const Login = sq.define("login", {
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    }, 
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    }

},{
    freezeTableName: true,
    timestamps: false
});


module.exports = Login;