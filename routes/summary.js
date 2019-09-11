const express = require('express');
const personRouter = express.Router();

const personController = require("../controllers/person")

personRouter.get("/", personController.index);
personRouter.get("/:name", personController.name);
personRouter.get("/:id", personController.id);
personRouter.post("/", personController.newPerson);
personRouter.put("/:id", personController.update);
personRouter.delete("/:id", personController.delete);

module.exports = personRouter;