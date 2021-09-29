const session = require('express-session');
const MongoStore = require("connect-mongo")
const mongoose= require("mongoose")

module.exports = app => {
  
 
  // required for the app when deployed to Heroku (in production)
  app.set('trust proxy', 1);
 
  
  app.use(
    session({
      secret: process.env.SESS_SECRET,
      resave: true,
      saveUninitialized: false,
      cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 600000 // 60 * 1000 ms === 1 min
      },
      store: MongoStore.create({
        mongoUrl: process.env.DB_REMOTE})
    })
  );
};