module.exports = function(sequelize, DataTypes) {
	const Item = sequelize.define("Item", {
		title:DataTypes.STRING,
		description:{
			type:DataTypes.STRING,
			allowNull: true
		},
		img:DataTypes.STRING,
		color: DataTypes.STRING,
		size:DataTypes.INTEGER,
		condition:DataTypes.STRING,
		type:DataTypes.STRING,
		email:DataTypes.STRING,

	});
	return Item;
};