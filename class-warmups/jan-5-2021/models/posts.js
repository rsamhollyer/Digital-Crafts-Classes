"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Posts extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Posts.belongsTo(models.User, {
				foreignKey: "userId",
				onDelete: "CASCADE",
			});
			Posts.hasMany(models.Comments, {
				foreignKey: "commentId",
			});
		}
	}
	Posts.init(
		{
			content: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Posts",
		}
	);
	return Posts;
};
