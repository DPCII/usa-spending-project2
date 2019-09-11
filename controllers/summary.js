const Summary = require("../models/Summary");

module.exports = {
    index: (req, res) => {
        //Return all people
        Summary.find({}).then(output => res.json(output))
    },
    // name: (req, res) => {
    //     //Return Summary by name
    //     Summary.find({ name: req.params.name }).then(output => res.json(output))
    // },
    // id: (req, res) => {
    //     //Return Summary by _id
    //     Summary.find({ _id: req.params._id }).then(output => res.json(output))
    // },
    // newSummary: (req, res) => {
    //     //Create new Summary
    //     const newSummary = req.body;
    //     Summary.create(newSummary).then(output => res.json(output))
    // },
    // update: (req, res) => {
    //     //Modify Summary by _id search
    //     const requestBody = req.body;
    //     Summary.findOneAndUpdate({ _id: req.params._id }, { requestBody }, { new: true })
    //     .then(output => res.json(output))
    // },
    // delete: (req, res) => {
    //     //Delete Summary entry by _id search
    //     Summary.findOneAndDelete({ _id: req.params._id }).then(output => res.json(output))
    // },
}