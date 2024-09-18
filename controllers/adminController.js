const adminlogins = require("../model/adminlogin");
const jwt =require('jsonwebtoken')





exports.adminlogin = async(req,res)=>{
    const {email,password}=req.body
    

    try{

        const admin = await adminlogins.findOne({email,password})

        if(admin){
            const token = jwt.sign({ adminId: admin._id },'supersecretkey');
            res.status(200).json({ admin, token });

        } else {
            res.status(406).json('Invalid email or password');
        }

    }
    catch(error){
       res.status(401).json(error)
       console.log();
       
        
    }

}