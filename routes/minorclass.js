const express = require('express');
const minorclassRouter = express.Router();
const minorclassController = require("../controllers/minorclass")

minorclassRouter.get("/", minorclassController.index);
minorclassRouter.get("/:name", minorclassController.name);
minorclassRouter.put("/byid/:id", minorclassController.update);
minorclassRouter.get("/byid/:id", minorclassController.id);
minorclassRouter.post("/", minorclassController.newMinorclass);

minorclassRouter.delete("/:id", minorclassController.delete);

module.exports = minorclassRouter;