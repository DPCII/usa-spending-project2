const Majorclass = require("../models/Majorclass");

module.exports = {
    index: (req, res) => {
        //Return all Majorclasss
        Majorclass.find({}).then(output => res.json(output))
    },

}