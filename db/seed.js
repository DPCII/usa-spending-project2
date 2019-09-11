// Import Models!
const Summary = require("../models/Summary");
const Majorclass = require("../models/Majorclass");

// Import raw data!
const summaryData = require("../db/summary.json");
const majorclassData = require('../db/majorclass.json');

//Clear records, test seeding
Summary.deleteMany({}).then(() => {
    console.log("Deleted all agency summary documents");

    Summary.create(summaryData).then(res => console.log(res));
})

Majorclass.deleteMany({}).then(() => {
    console.log("Deleted all Major Class documents");

    Majorclass.create(majorclassData).then(res => console.log(res));
})