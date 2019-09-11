// Connect to DB
const mongoose = require('../db/connection');

const MajorclassSchema = mongoose.Schema({
   
    agency_id: {
        type: mongoose.Schema.Types.Number,
        ref: "Summary"
    },
    major_object_class_code: Number,
    major_object_class_name: String,
    obligated_amount: Number,

})


const Majorclass = mongoose.model("Majorclass", MajorclassSchema);

module.exports = Majorclass;