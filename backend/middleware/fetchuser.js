const jwt = require('jsonwebtoken');
const JWT_SECRET = "PooJaryd333heerajK91uma0816@107$7r";

const fetchuser = (req,res,next)=>{
    const token = req.header('auth-token');//auth-token name of the token
    if(!token){
        res.status(401).send({error:"Plz authenticate using a valid token"});
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        console.log(data);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"Plz authenticate using a valid token"});
    }
  
}

module.exports = fetchuser;