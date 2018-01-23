const axios =require("axios")

module.exports = {

updateProfile: ( req, res ) => {
    console.log(req.body.updatedUser)

const { updatedName, updatedPictureURL, updatedEmail } = req.body.updatedUser

    req.app
        .get("db")
        .updateUserByAuthid([updatedName, updatedPictureURL, updatedEmail, req.body.userid])
        .then (response => {
            return res.status(200).json(response[0]);
        });
},

getUserList: (req, res ) => {
    req.app
        .get("db")
        .getUserListByUserid([ req.query.userid])
        .then( results => {
            res.json(results) } )
        .catch(error => console.log(error))       
    },

removeFromList: (req, res ) => {
    console.log(req.query)
    req.app
        .get("db")
        .removeFromUserList( [ req.query.selectionid, req.query.userid])
        .then( results => {
            res.json(results)})
        .catch(error => console.log(error))
}
   
}