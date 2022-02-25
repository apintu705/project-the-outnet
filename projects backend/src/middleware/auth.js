require("dotenv").config();
const jwt=require("jsonwebtoken")

const verifyToken= (token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token, process.env.JWT,(err,user)=>{
            if(err) return reject(err);
            resolve(user);
        })
    })
}


module.exports= async(req,res,next)=>{
    if(! req.headers.authorization){
        return res.status(400).send("authorization token was not valid");
    }
    if(! req.headers.authorization.startsWith("Bearer")){
        return res.status(400).send("authorization token was not valid");
    }
    let token=req.headers.authorization.split(" ")[1];
    let user;
    try{
        user=await verifyToken(token);
    }
    catch(e){
        return res.send("authorization token is invalid");
    }
  
        
    user_id=user.user._id;
    
    
    return next();
    
    
    
}