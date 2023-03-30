const doctorPrescriptionDetailController = require('../controller/doctorPrescriptionController')
const express = require('express')
const router = express.Router()



router.post("/add", doctorPrescriptionDetailController.addDoctorPrescriptionDetail);
router.post("/view", doctorPrescriptionDetailController.viewDoctorPrescriptionDetail);
router.post("/viewpatdetail", doctorPrescriptionDetailController.viewPatientPrescriptionDetail);


module.exports = router