const { sq } = require("../utils/PoolConnection");
const { DataTypes } = require("sequelize");
const Comments = require('../model/Comments');
const Posts = require('../model/Posts');
const Likes = require('../model/Likes');

const UserDetail = sq.define("users", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    passwords: {
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
  
  UserDetail.hasMany(Comments, {
    foreignKey: 'user_id'
  });
  Comments.belongsTo(UserDetail);

  UserDetail.hasMany(Posts, {
    foreignKey: 'user_id'
  });
  Posts.belongsTo(UserDetail);
  
  UserDetail.hasMany(Likes, {
    foreignKey: 'user_id'
  });
  Likes.belongsTo(UserDetail);


  // (async () => {
  //   await sq.sync();
    
  // })();

  sq.sync({alter: false}).then(() => {

  }).catch((err) => {
    console.log(err);
  })
  
  module.exports = UserDetail;