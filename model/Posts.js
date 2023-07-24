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
    user_id: {
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

module.exports = Posts;
