const express=require('express');
const route=express.Router();
const User = require('../model/payment.model')
const {send_mail}=require('../utils.js')
route.post("/",async(req, res, next) => {
    try{
        console.log(req.body)

        await send_mail({});
        const data=await User.create(req.body);
        return res.send(data)
    }
    catch(err){
        return res.send(err.message)
    }
})



route.get("/:chname",async(req, res, next) => {
    try{
        
        const data=await User.find({cardno:req.params.chname});
        return res.send(data)
    }
    catch(err){
        return res.send(err.message)
    }
})


module.exports =route;