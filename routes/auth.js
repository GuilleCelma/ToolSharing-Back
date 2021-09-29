const express = require("express");
const session = require("express-session")
const router = express.Router();
const User = require("../models/User.model")
const bcrypt = require('bcrypt');
const bcryptSalt = 10;



router.post("/signup", (req, res, next) => {
  
  const {username, password, address, birthdate, sex, tel } = req.body //<------------REACT CONTROLED FORM INFO STORED----------------->
  
  User
  .findOne({ username })
  .then(user => {
    
    //<------------CHECK IF THE USER ALREADY EXISTS----------------->
    
    if (user !== null) {
      console.log ("user already exists")
      //AÑADIR MENSAJE DE USUARIO EXISTENTE
      return;
    }
    
    //<------------PASSWORD ENCRYPTION----------------->
    
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    
    //<------------USER CREATION----------------->
    
    User
    .create({username, password: hashPass, username, address, birthdate, sex, tel})
    .then(userCreated => console.log(userCreated))
    .catch(err => console.log (err)) 
    
  })
  
  .catch(err => next(err));
  
})


//<-----------------------------------------LOG IN ROUTE----------------------------------------------------->

router.post('/login', (req, res, next) => {

  const { username, password } = req.body;
 
  console.log('SESSION =====> ', req.session)
 
  
  
  if (username === '' || password === '') {
    
    res.send( {
      errorMessage: 'Please enter both, username and password to login.'
    });
    return;
  }
  
  User.findOne({ username })
  .then(user => {
      if (!user) {console.log("no user")
      return
    } else if (bcrypt.compareSync(password, user.password)) {

        req.session.currentUser = user;
        res.cookie("cookieName","hola")
        res.json({correct:"correct"})

      } else {
        console.log("incorrect password");
      }
    })
    .catch(error => next(error));
    console.log(  req.session.currentUser)
  })
  
  










module.exports = router;


