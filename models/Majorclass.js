// Connect to DB
const mongoose = require('../db/connection');

const MajorclassSchema = mongoose.Schema({
   


})


const Majorclass = mongoose.model("Majorclass", MajorclassSchema);

module.exports = Majorclass;