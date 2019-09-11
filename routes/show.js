const express = require('express');
const showRouter = express.Router();

const showController = require("../controllers/show")

showRouter.get("/", showController.index);
showRouter.get("/:name", showController.name);
showRouter.get("/:id", showController.id);
showRouter.post("/", showController.newShow);
showRouter.put("/:id", showController.update);
showRouter.delete("/:id", showController.delete);

module.exports = showRouter;