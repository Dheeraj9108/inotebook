const connectToMongo = require('./db');
const express = require('express'); 

connectToMongo();
const app = express();
const port = 5000;

app.use(express.json());

// app.get('/',(req,res)=>{
//     res.send("Hellow World Dheeraj");
// })
//Available Notes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port,()=>{
    console.log(`inotebook backend listening at port ${port}`);
})
