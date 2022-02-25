


const express=require('express');
const route=express.Router();
const {Main,Cat,Designer,Product,Gender}=require("../model/products.model")





route.post("/main",async(req, res, next) => {
    try{
        const main=await Main.create(req.body);
        return res.send(main)
    }
    catch(err){
        return res.send(err.message)
    }
})
route.get("/main",async(req, res, next) => {
    try{
        const main=await Main.find()
        .populate("gender_id").populate("cat_id").populate("designer_id").populate("product_id").lean().exec();
        return res.send(main)
    }
    catch(err){
        return res.send(err.message)
    }
})
route.get("/main/clothing",async(req, res, next) => {
    try{
        const main=await Main.find({maincat:'Clothing'})
        .populate("gender_id").populate("cat_id").populate("designer_id").populate("product_id").lean().exec();
        return res.send(main)
    }
    catch(err){
        return res.send(err.message)
    }
})
route.get("/main/clothing/pricehigh",async(req, res, next) => {
    try{
        const main=await Main.find()
        .populate("gender_id").populate("cat_id").populate("designer_id").populate("product_id")
        
        .lean().exec();
        let c=main.sort((a,b)=>{return b.product_id.price-a.product_id.price})
        
        
        return res.send(c)
    }
    catch(err){
        return res.send(err.message)
    }
})
route.get("/main/clothing/pricelow",async(req, res, next) => {
    try{

        await send_mail({
            from:"abhishek@masai.school",
            to:req.body.email,
            subject:"hi your order is successfully placed",
            text:"hi your order is successfully placed",
            html:"<h1>hi your order is successfully placed</h1>"
        }

        );

        const main=await Main.find()
        .populate("gender_id").populate("cat_id").populate("designer_id").populate("product_id")
        
        .lean().exec();
        let c=main.sort((a,b)=>{return a.product_id.price-b.product_id.price})
        
        
        return res.send(c)
    }
    catch(err){
        return res.send(err.message)
    }
})
route.get("/main/:id",async(req, res, next) => {
    try{
        const main=await Main.find({_id:req.params.id})
        .populate("gender_id").populate("cat_id").populate("designer_id").populate("product_id").lean().exec();
        return res.send(main)
    }
    catch(err){
        return res.send(err.message)
    }
})
route.post("/categories",async(req, res, next) => {
    try{
        const main=await Cat.create(req.body);
        return res.send(main)
    }
    catch(err){
        return res.send(err.message)
    }
})
route.get("/categories",async(req, res, next) => {
    try{
        const main=await Cat.find().lean().exec();
        return res.send(main)
    }
    catch(err){
        return res.send(err.message)
    }
})
route.post("/gender",async(req, res, next) => {
    try{
        const main=await Gender.create(req.body);
        return res.send(main)
    }
    catch(err){
        return res.send(err.message)
    }
})
route.get("/gender",async(req, res, next) => {
    try{
        const main=await Gender.find().lean().exec();
        return res.send(main)
    }
    catch(err){
        return res.send(err.message)
    }
})
route.post("/designer",async(req, res, next) => {
    try{
        const main=await Designer.create(req.body);
        return res.send(main)
    }
    catch(err){
        return res.send(err.message)
    }
})
route.get("/designer",async(req, res, next) => {
    try{
        const main=await Designer.find().lean().exec();
        return res.send(main)
    }
    catch(err){
        return res.send(err.message)
    }
})
route.post("/display",async(req, res, next) => {
    try{
        const main=await Product.create(req.body);
        return res.send(main)
    }
    catch(err){
        return res.send(err.message)
    }
})
route.get("/display",async(req, res, next) => {
    try{
        const main=await Product.find().lean().exec();
        return res.send(main)
    }
    catch(err){
        return res.send(err.message)
    }
})
route.get("/exp",async(req, res, next) => {
    try{
        const main=await Main.find()
        .populate("gender_id").populate("cat_id").populate("designer_id").populate("product_id")
        
        .lean().exec();
        let c=main.sort((a,b)=>{return b.product_id.price-a.product_id.price})
        
        
        return res.send(c)
    }
    catch(err){
        return res.send(err.message)
    }
})




module.exports =route;