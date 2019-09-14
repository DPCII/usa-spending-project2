const Minorclass = require("../models/Minorclass");
let agencyId = require("../db/agency")

module.exports = {
    index: (req, res) => {
        //Return all Minorclasss
        Minorclass.find({}).then(output => res.json(output))
    },
    name: (req, res) => {
        //Return Minorclass by name
        Minorclass.find({ name: req.params.name }).then(output => res.json(output))
    },
    id: (req, res) => {
        //Return Minorclass by _id
        Minorclass.findOne({ "_id": req.params.id }, {}).then(output => {
            res.json(output)
            console.log(output)
        })
    },
    newMinorclass: (req, res) => {
        //Create new Minorclass
        const newMinorclass = req.body;
        Minorclass.create(newMinorclass).then(() => {
            Minorclass.updateMany({}, { "agency_id": agencyId }, { upsert: true, multi: true })
            .then(result => res.json(result))
        })
    },
    update: (req, res) => {
        //Modify Minorclass by _id search
        const requestBody = req.body;
        Minorclass.findOneAndUpdate({ "_id": req.params.id }, { $set: { requestBody } }, { new: true })
        .then(output => res.json(output))
    },
    delete: (req, res) => {
        //Delete Minorclass entry by _id search
        Minorclass.findOneAndDelete({ "_id": req.params.id }).then(output => res.json(output))
    },
}