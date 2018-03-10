module.exports = function(sequelize, DataTypes) {
	const Item = sequelize.define("Item", {
		title:DataTypes.STRING,
		description:{
			type:DataTypes.STRING,
			allowNull: true
		},
		img:{
			type:DataTypes.STRING,
			default:"https://screenshotlayer.com/images/assets/placeholder.png",
		},			
		color: DataTypes.STRING,
		size:DataTypes.INTEGER,
		condition:DataTypes.STRING,
		type:DataTypes.STRING,
		email:DataTypes.STRING,

	});
	return Item;
};