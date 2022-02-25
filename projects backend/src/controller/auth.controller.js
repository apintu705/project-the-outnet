const User=require("../model/user.model.js")
require('dotenv').config();
var jwt = require('jsonwebtoken');

const newToken=(user)=>{
    return jwt.sign({ user}, process.env.JWT);
}

const register=async(req,res,next)=>{
    try{
        console.log("j")
        let user=await User.findOne({email:req.body.email});

        if(user){
            return res.send("user already exist")
        }
        user=await User.create(req.body);
        const token=newToken(user)

        return res.send({user,token})
    }
    catch(err){
        return res.send(err.message)
    }
}


const login=async(req, res, next)=>{
    try{
        let user=await User.findOne({email:req.body.email});

        if(!user){
            return res.send("user donsnot found")
        }

        const match=user.check(req.body.password);
        if(!match){ return res.send("password not matched")}
        const token=newToken(user)

        return res.send({user,token})
    }
    catch(err){
        return res.send(err.message)
    }
}





module.exports ={register,login}