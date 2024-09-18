const express = require('express')

const adminController = require('./controllers/adminController')
const formController = require('./controllers/formController')
const router = new express.Router()

router.post('/adminlogin',adminController.adminlogin)
router.get('/allgriviences',formController.getAllGrievances)
router.put('/editgrivience/:id',formController.viewgriviences)
router.get('/getgrievancebyId/:id', formController.getGrievanceById); 
router.delete('/deletegrivience/:id',formController.deleteGriviences)

module.exports = router