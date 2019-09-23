var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/new", function(req, res, next) {
  const body = req.body;
  const { nid, title } = body;
  req.io.of("admin").emit("new-order", { nid, title });
  return res.json({ code: 1, message: "ok" });
});

module.exports = router;
