const axios = require("axios")
require("dotenv").config();

module.exports = {
    
     getEventData: (req, res) => {
        axios
        .get(`https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=%22dallas%22&location.within=10mi&token=${process.env.EVENTBRITE_API_KEY}`)
        .then(results => { 
            res.json(results.data) } )
        .catch(error => console.log (error))
    }
}