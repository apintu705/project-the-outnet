


const express=require('express');
const route=express.Router();
const {Main,Cat,Designer,Product,Gender}=require("../model/products.model")






//shorting by cateogries
route.get("/main/:main/:cat",async(req, res, next) => {
    try{
        const main=await Main.find({maincat:req.params.main})
        .populate("gender_id").populate("cat_id").populate("designer_id").populate("product_id").lean().exec();
        let c=[];
        for(let i=0; i<main.length; i++){
            if(main[i].cat_id.categories==req.params.cat){
                c.push(main[i])
             }
             else if(main[i].designer_id.designer===req.params.cat){
                c.push(main[i])
            }
            else if(main[i].product_id.color===req.params.cat){
                c.push(main[i])
            }
        }
        
        
        
        return res.send(c)
    }
    catch(err){
        return res.send(err.message)
    }
})





module.exports =route;