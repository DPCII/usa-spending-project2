// Import Models!
const Person = require("../models/Person");
const Show = require("../models/Show");

// Import raw data!
const personData = require("../db/people.json");
const showData = require('../db/shows.json');

//Clear records, test seeding
Person.deleteMany({}).then(() => {
    console.log("Deleted all person documents");

    Person.create(personData).then(res => console.log(res));
})

Show.deleteMany({}).then(() => {
    console.log("Deleted all show documents");

    Show.create(showData).then(res => console.log(res));
})