
// Require connection file and save to mongoose.
const mongoose = require('../db/connection');

const PersonSchema = new mongoose.Schema({
    id: Number,
    url: String,
    name: String,
    country: {
        name: String,
        code: String,
        timezone: String,
    },
    birthday: Date,
    deathday: Date,
    gender: String,
    image: {
        medium: String,
        original: String,
    },
    _links: {
        self: {
            href: String,
        },
    },
});

const Person = mongoose.model("Persons", PersonSchema);

module.exports = Person;