const fetchUserDetailsController = require('../controller/fetchUserDetailsController')
const express = require('express')
const router = express.Router()


router.post("/patient", fetchUserDetailsController.fetchPatientDetails);

module.exports = router