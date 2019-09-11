const Person = require("../models/Person");

module.exports = {
    index: (req, res) => {
        //Return all people
        Person.find({}).then(output => res.json(output))
    },
    name: (req, res) => {
        //Return person by name
        Person.find({ name: req.params.name }).then(output => res.json(output))
    },
    id: (req, res) => {
        //Return person by _id
        Person.find({ _id: req.params._id }).then(output => res.json(output))
    },
    newPerson: (req, res) => {
        //Create new person
        const newPerson = req.body;
        Person.create(newPerson).then(output => res.json(output))
    },
    update: (req, res) => {
        //Modify person by _id search
        const requestBody = req.body;
        Person.findOneAndUpdate({ _id: req.params._id }, { requestBody }, { new: true })
        .then(output => res.json(output))
    },
    delete: (req, res) => {
        //Delete person entry by _id search
        Person.findOneAndDelete({ _id: req.params._id }).then(output => res.json(output))
    },
}