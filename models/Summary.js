
// Require connection file and save to mongoose.
const mongoose = require('../db/connection');

const SummarySchema = new mongoose.Schema({

});

const Summary = mongoose.model("Summary", SummarySchema);

module.exports = Summary;