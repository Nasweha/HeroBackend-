


const jwt = require('jsonwebtoken')


const jwtmiddleware = (req,res,next)=>{
    
    console.log('inside jwt middleware');
    
    const token =req.headers["authorization"].split(' ')[1]
    //  console.log(token);


   
    try {
        
        const jwtResponse = jwt.verify(token,'supersecretkey')
        console.log(jwtResponse);
        req.payload = jwtResponse.adminId
        next()

    } catch (error) {
        res.status(401).json('autherization failed...please login',error)
    }
    


   
}

module.exports = jwtmiddleware