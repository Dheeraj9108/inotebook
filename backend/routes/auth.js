const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Creat a user using : POST "/api/auth"
router.post('/',(req,res)=>{
    // obj = {
    //     a:"this",
    //     number: 34
    // }
    // res.json(obj);
    const user = User(req.body);
    user.save();
    console.log(req.body);
    res.send("hellow")
})
module.exports = router