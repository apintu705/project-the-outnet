const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const cardSchama=new mongoose.Schema({
    name:{type:"string",require:true,},
    cardno:{type:"string",require:true},
    ccv:{type:"string",require:true,unique:true},
    password:{type:"string",require:true,}
},{versionKey:false,timestamps:true});

cardSchama.methods.check=function(password){
    return bcrypt.compareSync(password,this.password)
}


cardSchama.pre("save",function(next){
    if(!this.isModified("password")){return next()};

    var hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();


})
module.exports =mongoose.model("card",cardSchama);