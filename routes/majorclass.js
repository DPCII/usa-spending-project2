const express = require('express');
const majorclassRouter = express.Router();

const majorclassController = require("../controllers/show")

majorclassRouter.get("/", majorclassController.index);
// majorclassRouter.get("/:name", majorclassController.name);
// majorclassRouter.get("/:id", majorclassController.id);
// majorclassRouter.post("/", majorclassController.newShow);
// majorclassRouter.put("/:id", majorclassController.update);
// majorclassRouter.delete("/:id", majorclassController.delete);

module.exports = majorclassRouter;