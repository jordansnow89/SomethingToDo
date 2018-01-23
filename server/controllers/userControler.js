const axios =require("axios")

module.exports = {

updateProfile: ( req, res ) => {
const { updatedName, updatedPictureURL, updatedEmail } = req.body.updatedUser

    req.app
        .get("db")
        .updateUserByAuthid([updatedName, updatedPictureURL, updatedEmail, req.body.userid])
        .then (response => {
            return res.status(200).json(response);
        });


}


    
}