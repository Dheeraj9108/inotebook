const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body,validationResult} = require('express-validator');
//Creat a user using : POST "/api/auth"
router.post('/CreateUser',[
    body('name','Enter a valid email').isLength({min:3}),
    body('email').isEmail(),
    body('password').isLength({min:5})
],async(req,res)=>{
    // obj = {
    //     a:"this",
    //     number: 34
    // }
    // res.json(obj);
    // const user = User(req.body);
    // user.save();
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()});
    }
    // res.send(req.body);
    //check weather user with this email exit already
    try {
        
    
    let user = await User.findOne({email : req.body.email});
    if(user){
        return res.status(400).json({error : "Sorry User with this email Already exits"})
    }
    let users = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })
    res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error Occured") ;   
    }
    
    // .then(user => res.json(user)).catch(err => {console.log(err)
    // res.json({error:'Please enter a valid email',msg:err.msg})});
    // console.log(req.body);
    // res.send("hellow")
})
module.exports = router