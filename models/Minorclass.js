// Connect to DB
const mongoose = require('../db/connection');

const MinorclassSchema = mongoose.Schema({
   
    major_object_class_code: {
        type: mongoose.Schema.Types.Number,
        ref: "Majorclass"
    },
    object_class_code: Number,
    object_class_name: String,
    obligated_amount: Number,

})


const Minorclass = mongoose.model("Minorclass", MinorclassSchema);

module.exports = Minorclass;