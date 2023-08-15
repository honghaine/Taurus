const { sq } = require("../utils/PoolConnection");
const { DataTypes } = require("sequelize");

const Posts = sq.define(
  "posts",
  {
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    text: {
      type: DataTypes.TEXT,
    },
    image: {
        type: DataTypes.STRING,
    },
    video: {
        type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: 'created_at',
  }
);

(async () => {
  await sq.sync();
})();

module.exports = Posts;
