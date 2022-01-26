require('./model/dbConnection')
require('dotenv/config')
const express=require('express');
var app=express();
const port = process.env.PORT || 3001;

var userController=require('./controller/controller')
app.use(userController)
// app.use('/users',userController)

app.listen(port,()=>console.log("backend run on port:"+port))