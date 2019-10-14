const getAgency = require("../models/getAgency");
const agencyCall = require('../db/getSpendingData')



        

module.exports = {
    index: (req, res) => {
        //Return all agencies
        let agencyId = req.body.agency
        // need to add the agency # variable from the front end call. Also need the call to fire on change and on page load.
        
        
        .then(output => res.json(output))
        .then(() => console.log(allAgencyIds))
    },

}