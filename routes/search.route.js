const router = require("express").Router();
const CONFIG = require("../config/config");
const controller = require("../controllers/search.controller");

router.route("/").get(controller.searchMain);

module.exports = router;
