const axios = require("axios")
require("dotenv").config();

module.exports = {
    //API CALL TO EVENBRITE TO GRAB EVENT DATA DEPENDING ON WHAT THE QUERY IS
     getEventData: (req, res) => {

        let url = `https://www.eventbriteapi.com/v3/events/search/?location.address=${req.query.city}`
        let token = `&token=${process.env.EVENTBRITE_API_KEY}`

        if ( req.query.categories ){
            url += `&categories=${req.query.categories}` 
        }

        if (req.query.distance) {
            url += `&location.within=${req.query.distance}`
        }

        if ( req.query.date ) {
            url += `&start_date.keyword=${req.query.date}`
        }

        if (req.query.price) {
            url += `&price=${req.query.price}`
        }

        axios
        .get(url + token)
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