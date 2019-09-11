const Show = require("../models/Show");

module.exports = {
    index: (req, res) => {
        //Return all shows
        Show.find({}).then(output => res.json(output))
    },
    name: (req, res) => {
        //Return show by name
        Show.find({ name: req.params.name }).then(output => res.json(output))
    },
    id: (req, res) => {
        //Return show by _id
        Show.find({ _id: req.params._id }).then(output => res.json(output))
    },
    newShow: (req, res) => {
        //Create new show
        const newShow = req.body;
        Show.create(newShow).then(output => res.json(output))
    },
    update: (req, res) => {
        //Modify show by _id search
        const requestBody = req.body;
        Show.findOneAndUpdate({ _id: req.params._id }, { requestBody }, { new: true })
        .then(output => res.json(output))
    },
    delete: (req, res) => {
        //Delete show entry by _id search
        Show.findOneAndDelete({ _id: req.params._id }).then(output => res.json(output))
    },
}