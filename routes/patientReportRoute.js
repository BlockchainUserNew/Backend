const patientReportDetailController = require('../controller/patientReportController')
const express = require('express')
const router = express.Router()
const upload = require('../middlewares/fileUpload')



router.post("/add", upload.array('image', 10), patientReportDetailController.addPatientReportDetail);

router.post("/view", patientReportDetailController.viewPatientReportDetail);

module.exports = router