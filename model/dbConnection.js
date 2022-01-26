require('dotenv/config')
const mongoose = require("mongoose");
mongoose.connect(process.env.db_connection,{useNewUrlParser:true},(err)=>{
    if(!err) {console.log('mogodb connection succeeded')}
    else {console.log('err in mongo db connection'+err);}
})