const express = require('express');
const summaryRouter = express.Router();

const summaryController = require("../controllers/summary");

summaryRouter.get("/", summaryController.index);


module.exports = summaryRouter;