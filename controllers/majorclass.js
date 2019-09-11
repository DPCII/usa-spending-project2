const Majorclass = require("../models/Majorclass");

module.exports = {
    index: (req, res) => {
        //Return all Majorclasss
        Majorclass.find({}).then(output => res.json(output))
    },
    name: (req, res) => {
        //Return Majorclass by name
        Majorclass.find({ name: req.params.name }).then(output => res.json(output))
    },
    id: (req, res) => {
        //Return Majorclass by _id
        Majorclass.find({ _id: req.params._id }).then(output => res.json(output))
    },
    newMajorclass: (req, res) => {
        //Create new Majorclass
        const newMajorclass = req.body;
        Majorclass.create(newMajorclass).then(output => res.json(output))
    },
    update: (req, res) => {
        //Modify Majorclass by _id search
        const requestBody = req.body;
        Majorclass.findOneAndUpdate({ _id: req.params._id }, { requestBody }, { new: true })
        .then(output => res.json(output))
    },
    delete: (req, res) => {
        //Delete Majorclass entry by _id search
        Majorclass.findOneAndDelete({ _id: req.params._id }).then(output => res.json(output))
    },
}