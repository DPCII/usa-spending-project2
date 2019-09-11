// Connect to DB
const mongoose = require('../db/connection');

const MinorclassSchema = mongoose.Schema({
   
    agency_id: {
        type: mongoose.Schema.Types.Number,
        ref: "Summary"
    },
    object_class_code: Number,
    object_class_name: String,
    obligated_amount: Number,

})


const Minorclass = mongoose.model("Minorclass", MinorclassSchema);

module.exports = Minorclass;