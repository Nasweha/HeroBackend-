//import mongoose 
const  mongoose= require('mongoose')


const adminSchema = new mongoose.Schema({

   
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true
    }
   
})


const adminlogins = mongoose.model("adminlogins",adminSchema)

//export collection name "users"
module.exports = adminlogins