const mongoose=require('mongoose');


const address=new mongoose.Schema({
    address:{type:"string",require:true,},
    city:{type:"string",require:true},
    pincode:{type:Number,require:true,},
    mobile:{type:Number,require:true,}
},{versionKey:false,timestamps:true});





module.exports =mongoose.model("a",address);