const { sq } = require("../utils/PoolConnection");
const { DataTypes } = require("sequelize");
const  Likes  = require("../model/Likes");
const UserDetail = require("./UserDetail");

const Comments = sq.define(
  "comments",
  {
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    text: {
      type: DataTypes.TEXT,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    post_id: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Comments.hasOne(Likes, {
  foreignKey: "user_id",
});
Likes.belongsTo(Comments);

(async () => {
  await sq.sync();
})();

module.exports = Comments;
