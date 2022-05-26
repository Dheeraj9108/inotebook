const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body,validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "PooJaryd333heerajK91uma0816@107$7r";

//Creat a user using : POST "/api/auth"
router.post('/CreateUser',[
    body('name','Enter a valid email').isLength({min:3}),
    body('email').isEmail(),
    body('password').isLength({min:5})
],async(req,res)=>{
    let sucess = false;
    // obj = {
    //     a:"this",
    //     number: 34
    // }
    // res.json(obj);
    // const user = User(req.body);
    // user.save();
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({sucess,errors:errors.array()});
    }
    // res.send(req.body);
    //check weather user with this email exit already
    try {   
    
    let user = await User.findOne({email : req.body.email});
    if(user){
        return res.status(400).json({sucess,error : "Sorry User with this email Already exits"})
    }

    const salt = await bcrypt.genSalt(10);
    secpass = await bcrypt.hash(req.body.password,salt);
    user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secpass
    })
    const data = {
        user:{
            id:user.id
        }
    } 
    const authtoken = jwt.sign(data,JWT_SECRET);
    // console.log(data);
    // res.json(users);
    sucess = true;
    res.json({sucess,authtoken});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error Occured") ;   
    }
    
    // .then(user => res.json(user)).catch(err => {console.log(err)
    // res.json({error:'Please enter a valid email',msg:err.msg})});
    // console.log(req.body);
    // res.send("hellow")
})






router.post('/login',[
    body('email','Enter a valid email').isEmail(),
    body('password','').isLength({min:5})
],async(req,res)=>{
    let sucess = false;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()});
    }

    const {email,password} = req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            sucess = false;
            return res.status(400).json({error:"plz try to login with correct credentials"});
        }
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            sucess = false;
            return res.status(400).json({sucess,error:"plz try to login with correct credentials"});
        }
        const data = {
            user:{
                id:user.id
            }
        } 
        const authtoken = jwt.sign(data,JWT_SECRET);
        sucess = true;
        res.json({sucess,authtoken});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error") ;   
    }
})





// rout3
router.post('/getuser', fetchuser, async(req,res)=>{
  
try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error") ;   
}
});

module.exports = router