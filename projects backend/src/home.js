const express = require('express');
const app = express();

var cors = require('cors')
app.use(cors());

app.use(express.json());
const connect = require('./config/db.js');
const { body, validationResult } = require('express-validator')


const {register,login}=require("./controller/auth.controller")
app.use("/register",register);
app.use("/login", login);


const usercontrol=require('./controller/user.controller.js')
app.use("/user", usercontrol);

const p=require('./controller/pc.js')
app.use("/product",p);


const sortingcontrol=require('./controller/sotring.controller.js')
app.use("/productss",sortingcontrol);

const addcontrol=require('./controller/addres.js')
app.use("/address",addcontrol);

const cardcontrol=require('./controller/card.js')
app.use("/payment",cardcontrol);

app.listen(2445,async()=>{
    try{
        await connect();
        console.log('listening on port 2345')
    }
    catch(err){
        console.error(err.message);
    }
})
