// Import Models!
const Summary = require("../models/Summary");
const Majorclass = require("../models/Majorclass");
const Minorclass = require("../models/Minorclass");

// Import raw data!
const summaryData = require("../db/summary.json");
const majorclassData = require('../db/majorclass.json');
const minorclassData = require('../db/minorclass.json');

// Import agencyid
const dynamicVariables = require('../db/getSpendingData');
const agencyId = dynamicVariables.agencyId;
console.log(agencyId)

//Clear records, test seeding
Summary.deleteMany({}).then(() => {
    console.log("Deleted all agency summary documents");

    Summary.create(summaryData)
    .then(() => {
        Summary.findOneAndUpdate({}, { $set: { "agency_id": agencyId } }, { new: true })
        .then(outputA => {
            outputA.save()
        })
    })
}).then(() => {
    Majorclass.deleteMany({}).then(() => {
        console.log("Deleted all Major Class documents");

            Majorclass.create(majorclassData)
            .then(() => {
                Majorclass.findOneAndUpdate({}, { $set: { "agency_id": agencyId } }, { new: true })
                .then(outputB => {
                    outputB.save()
            })
            // .then(res => console.log(res))
    })
    .then(() => {
        Minorclass.deleteMany({}).then(() => {
            console.log("Deleted all Minor Class documents");
    
            Minorclass.create(minorclassData)
            .then(() => {
                Minorclass.findOneAndUpdate({}, { $set: { "agency_id": agencyId }}, { new: true })
                .then(outputC => {
                    outputC.save()
            })
            // .then(res => console.log(res))
        })
    })
})
})})
