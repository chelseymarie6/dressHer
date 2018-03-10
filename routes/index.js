const router = require("express").Router();
const items = require("../../controllers/items");

router.route("/all/")
  .get(items.findAll);


module.exports = router;