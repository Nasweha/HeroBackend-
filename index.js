// import dotenv
require('dotenv').config()

// import express
const express = require('express')

// import cors
const cors = require('cors')
const router = require('./router')
require('./db/connection')

//create server
const adminServer = express()

adminServer.use(cors())

adminServer.use(express.json())

adminServer.use(router)


// port
const PORT = 4008 || process.env.PORT

// run server
adminServer.listen(PORT,()=>{
    console.log((` superhero server running successfully at port ${PORT}`));
    
})




