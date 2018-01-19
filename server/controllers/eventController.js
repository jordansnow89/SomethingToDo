const axios = require("axios")
require("dotenv").config();

module.exports = {
    
     getEventData: (req, res) => {
        axios
        .get(`https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=${req.query.city}&location.within=10mi&token=${process.env.EVENTBRITE_API_KEY}`)
        .then(results => { 
            res.json(results.data) } )
        .catch(error => console.log (error))
    },

    addEventToProfile: ( req, res ) => {
    const { userid, eventData } = req.body
    const { name, start, category_id,  description  , logo , is_free } = eventData;
    const { url } = logo;
    const { local } = start;
    const eventName = name.text;
    const eventDescription = description.text

    req.app
        .get("db")
        .addUserEvent([userid, eventName , local , category_id , eventDescription,  url , is_free ])
        .then(response => {
          return res.status(200).json(response);
        });

        
    } 




}