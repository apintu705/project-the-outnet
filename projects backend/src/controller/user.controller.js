const express=require('express');
const route=express.Router();
const User = require('../model/user.model')





route.get("/:username",async(req, res, next) => {
    try{
        const data=await User.find({email:req.params.username});
        return res.send(data)
    }
    catch(err){
        return res.send(err.message)
    }
})


module.exports =route;