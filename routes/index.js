const router = require("express").Router();
const items = require("../../controllers/items");

//to get all the items
router.route("/all/")
  .get(items.findAll);


//to create new item
router.route("/new")
  .post(items.create);


module.exports = router;

