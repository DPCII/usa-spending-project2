const express = require('express');
const getAgencyRouter = express.Router();

const getAgencyController = require("../controllers/getagency");

getAgencyRouter.get("/", getAgencyController.index);


module.exports = getAgencyRouter;