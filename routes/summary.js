const express = require('express');
const summaryRouter = express.Router();

const summaryController = require("../controllers/summary");

summaryRouter.get("/", summaryController.index);
// summaryRouter.get("/:name", summaryController.name);
// summaryRouter.get("/:id", summaryController.id);
// summaryRouter.post("/", summaryController.newPerson);
// summaryRouter.put("/:id", summaryController.update);
// summaryRouter.delete("/:id", summaryController.delete);

module.exports = summaryRouter;