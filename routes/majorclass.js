const express = require('express');
const majorclassRouter = express.Router();

const majorclassController = require("../controllers/majorclass")

majorclassRouter.get("/", majorclassController.index);


module.exports = majorclassRouter;