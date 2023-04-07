const patientReportDetailController = require('../controller/patientReportController')
const express = require('express')
const router = express.Router()
const upload = require('../middlewares/fileUpload')



router.post("/add", upload.single('file'), patientReportDetailController.addPatientReportDetail);

router.post("/view", patientReportDetailController.viewPatientReportDetail);

router.get('/download/:filename', patientReportDetailController.downloadFile);

router.get('/date', patientReportDetailController.viewPatientReportDates);

module.exports = router