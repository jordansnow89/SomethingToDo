require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport")
const Auth0Strategy = require("passport-auth0")

const eventController = require("./controllers/eventController");
const userController = require("./controllers/userController");

const {
    AUTH_DOMAIN,
  CLIENT_SECRET,
  CLIENT_ID,
  PORT,
  CONNECTION_STRING,
  SESSION_SECRET
} = process.env

const app = express();

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
<<<<<<< HEAD
  .catch(console.log);

app.use(express.static(`${__dirname}/../build`));
=======
  .catch(console.log); 
  
app.use( express.static( `${__dirname}/../build` ) );
>>>>>>> 1b00fa3c2711d405ffe467fce7814c55f55f3452
app.use(json());
app.use(cors());
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 525600 * 60 * 1000
  }
})
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: AUTH_DOMAIN,
      clientSecret: CLIENT_SECRET,
      clientID: CLIENT_ID,
      callbackURL: "/auth",
      scope: "openid profile"
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
      app
        .get("db")
        .getUserByAuthid(profile.id)
        .then(response => {
          if (!response[0]) {
            app
              .get("db")
              .createUserByAuthid([profile.id, profile.displayName, profile.picture])
              .then(created => {
                return done(null, created[0]);
              });
          } else {
            return done(null, response[0]);
          }
        });
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));


app.get('/auth', passport.authenticate('auth0', {
  successRedirect: `http://localhost:3000/Profile/`,
  failureRedirect: 'http://localhost:3000/auth'
}));

app.get('/api/me', (req, res, next) => {
  console.log(req.sessionID)

  if (req.user) res.json(req.user);
  else res.json("User is not logged in")
});

// app.get("/api/me", peopleController.getPerson)
//controller 
// module.exports ={
// getPerson: (req,res) => {
// }
// }
app.put('/api/update', userController.updateProfile)
app.get('/api/getuserlist', userController.getUserList)
app.delete('/api/removefromlist', userController.removeFromList)


app.get("/api/getEventData", eventController.getEventData);
app.put("/api/addEventToProfile", eventController.addEventToProfile);


const path = require('path')
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(PORT || 3001, () => {
  console.log(`I am watching and waiting on ${PORT || 3001}`)
})
