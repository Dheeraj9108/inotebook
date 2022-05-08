const connectToMongo = require('./db');
const express = require('express'); 

connectToMongo();
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hellow World Dheeraj");
})
app.listen(port,()=>{
    console.log(`Example app listening at port ${port}`);
})
