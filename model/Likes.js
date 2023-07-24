const { sq } = require("../utils/PoolConnection");
const { DataTypes } = require("sequelize");

const Likes = sq.define(
  "likes",
  {
    like_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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

(async () => {
  await sq.sync();
})();

module.exports = Likes;
