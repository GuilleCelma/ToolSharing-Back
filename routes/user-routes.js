
const router = require("express").Router
const User = require("../models/User.model")


//<-----------------ROUTE TO CREATE USERS -------------------------------------------------------------------------------------------------------->

router.post("/user", (req, res) =>{
    
    
    const {usernaname, password, email, address, birthdate, sex, tel } = req.body //<------------REACT CRONTOLED FORM INFO STORED----------------->
    
    
    User
    .create({usernaname, password, email, address, birthdate, sex, tel})
    .then(userCreated => console.log(userCreated))
    .catch(err => console.log (err))

})

//<-----------------ROUTE TO CREATE USERS -------------------------------------------------------------------------------------------------------->

router.get( "/user/:id" , (req, res) =>{

    const {id} = req.params  //<----------------GETING ID INFO FROM URL PARAMS ------------------------------------------------------------------->

    User.find(id)
    .then(user => res.json(user))
    .catch(err => console.log(err))
})


//<-----------------ROUTE TO UPDATE USERS -------------------------------------------------------------------------------------------------------->

router.put( "/user/:id", (req,res) =>{

    const {id} = req.params  //<----------------GETING ID INFO FROM URL PARAMS ------------------------------------------------------------------->
    const {usernaname, password, email, address, birthdate, sex, tel } = req.body  //<------------REACT CRONTOLED FORM INFO STORED---------------->

    User.findByIdAndUpdate(id, {usernaname, password, email, address, birthdate, sex, tel }, {new:true})
    .then(userUpdated => console.log(userUpdated) )
    .catch(err => console.log(err))
})


//<-----------------ROUTE TO UPDATE USERS -------------------------------------------------------------------------------------------------------->

router.delete("/user/:id", (req, res) =>{

    const {id} = req.params  //<----------------GETING ID INFO FROM URL PARAMS ------------------------------------------------------------------->

    User.findByIdAndDelete(id)
    .then(userDeleted => console.log(userDeleted))
    .catch(err => console.log(err))
})


module.exports = router