const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.json("This is from the wiki root");
});

router.get("/about", (req, res) => {
	res.json("This is from the wiki root's about page");
});

module.exports = router;
