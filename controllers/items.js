const db = require("../models");

module.exports = {

	findAll: (req, res) =>{
		db.Item.findAll()
			.then(function(dbItems) {
			res.json(dbItems);
		})
			.catch(err => res.status(422).json(err));
	},

	create: function(req, res) {
		db.Item.create({
			title: req.body.title,
			description: req.body.description,
			img: req.body.img,
			color: req.body.color,
			size: req.body.size,
			condition: req.body.condition,
			type: req.body.type,
			email: req.body.email
		})
			.then(function(dbItem) {
			console.log("good====63")
			res.json(dbItem);
		})
			.catch(err => res.status(422).json(err));
	},

};