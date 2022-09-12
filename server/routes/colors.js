const express = require("express");

const colorRouter = express.Router();

colorRouter.post("/:name/css-styles", (req, res) => {
	res.json({ msg: `"POST /colors/${req.params.name}/css-styles"` });
});

colorRouter.delete("/:name/css-styles/:style", (req, res) => {
	res.json({
		msg: `"Delete /colors/${req.params.name}/css-styles/${req.params.style}"`,
	});
});

colorRouter.get("/:name", (req, res) => {
	res.json({ msg: "Get colors/:name " + req.params.name });
});

colorRouter.get("/", (req, res) => {
	res.json({ msg: "Get / Colors" });
});

module.exports = colorRouter;
