
// Require connection file and save to mongoose.
const mongoose = require('../db/connection');

const SummarySchema = new mongoose.Schema({
    obligated_amount: Number,
    agency_id: Number,
    budget_authority_amount: Number,
    percentage_of_total_budget_authority: Number,
    congressional_justification_url: String,
    abbreviation: String,
    outlay_amount: Number,
    active_fq: String,
    agency_name: String,
    current_total_budget_authority_amount: Number,
    active_fy: String,
});

const Summary = mongoose.model("Summary", SummarySchema);

module.exports = Summary;