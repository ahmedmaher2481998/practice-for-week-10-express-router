const express = require("express");

const colorRouter = express.Router();

colorRouter.get("/:name", (req, res) => {
	res.json({ msg: "Get colors/:name " + req.params.name });
});

colorRouter.get("/", (req, res) => {
	res.json({ msg: "Get / Colors" });
});

module.exports = colorRouter;
