require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport")
const Auth0Strategy = require("passport-auth0")

const eventController = require("./controllers/eventController");

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
  .catch(console.log);

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
        console.log(profile)
        app
          .get("db")
          .getUserByAuthid(profile.id)
          .then(response => {
            if (!response[0]) {
              app
                .get("db")
                .createUserByAuthid([profile.id, profile.displayName,])
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
    successRedirect: 'http://localhost:3000/Profile',
    failureRedirect: 'http://localhost:3000/auth'
    }));

app.get('/api/me', (req, res, next) => {console.log(req.sessionID)

        if (req.user)  res.json(req.user) ;
        else res.json("User is not logged in")
    });
    
// app.get("/api/me", peopleController.getPerson)
//controller 
// module.exports ={
// getPerson: (req,res) => {

// }
// }
app.get("/api/getEventData", eventController.getEventData);

    app.get("/api/test", (req, res) => {
        const db = app.get("db");
      
        db.products
          .find({})
          .then(response => {
              console.log(response)
            res.json(response);
          })
          .catch(console.log);
      });

app.listen(PORT || 3001, () => {
    console.log(`I am watching and waiting on ${PORT||3001}`)
})
