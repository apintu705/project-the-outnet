const express=require('express');
const route=express.Router();
const Add = require('../model/address.model')

route.post("",async(req, res, next) => {
    try{
        
        const data=await Add.create(req.body);
        return res.send(data)
    }
    catch(err){
       
        return res.send(err.message)
    }
})



route.get("/:city",async(req, res, next) => {
    try{
       
        const data=await Add.find({city:req.params.city});
        return res.send(data)
    }
    catch(err){
        return res.send(err.message)
    }
})


module.exports =route;