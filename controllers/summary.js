const Summary = require("../models/Summary");

module.exports = {
    index: (req, res) => {
        //Return all people
        Summary.find({}).then(output => res.json(output))
    },

}