const mongoose = require('mongoose');

const main=new mongoose.Schema({
    maincat:{type: 'string',required: true},
    cat_id:{type:mongoose.Schema.Types.ObjectId, ref:"cat"},
    designer_id:{type:mongoose.Schema.Types.ObjectId, ref:"des"},
    gender_id:{type:mongoose.Schema.Types.ObjectId,ref:"gender"},
    product_id:{type:mongoose.Schema.Types.ObjectId,ref:"product"},
},{
    versionKey:false,
    timestamps:true
})

const categories=new mongoose.Schema({
    categories: {type: 'string',required: true},
},{
    versionKey:false,
    timestamps:true
})
const designer=new mongoose.Schema({
    designer: {type: 'string',required: true},
})
const gender=new mongoose.Schema({
    gender: {type: 'string',required: true},
})

const product=new mongoose.Schema({
    size:[{type:Number,require:true}],
    color:{type:"string",require:true},
    price:{type:"string",require:true},
    pricemain:{type: 'string',required: true},
    fabric:{type:"string",require:false},
    des:{type:"string",required:true},
    image:[{type:String,required:true}],
    details:[{type:String,required:true},],
    fit:[{type:String,required:true},],


})
const Gender=mongoose.model("gender",gender)
const Main=mongoose.model('main',main);
const Cat=mongoose.model("cat",categories);
const Designer=mongoose.model("des",designer);
const Product=mongoose.model("product",product);
module.exports={Main,Cat,Designer,Product,Gender};