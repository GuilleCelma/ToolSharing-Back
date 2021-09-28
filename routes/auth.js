const express = require("express");
const router = express.Router();
const User = require("../models/User.model")

router.post("/login", (req, res, next) => {

});

router.post("/signup", (req, res, next) => {
        
  const {username, password, email, address, birthdate, sex, tel } = req.body //<------------REACT CONTROLED FORM INFO STORED----------------->
  console.log('hola')
  User
  .create({username, password, email, address, birthdate, sex, tel})
  .then(userCreated => console.log(userCreated))
  .catch(err => console.log (err))

})

module.exports = router;


