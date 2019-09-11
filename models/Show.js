// Connect to DB
const mongoose = require('../db/connection');

const ShowSchema = mongoose.Schema({
   
    url: String,
    name: String,
    language: String,
    genres: Array,
    status: String,
    runtime: Number,
    rating: {
        average: Number,
    },
    weight: Number,
    image: {
        medium: String,
        original: String,
    },
    summary: String,

})


const Show = mongoose.model("Shows", ShowSchema);

module.exports = Show;