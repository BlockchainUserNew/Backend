const patientReportDetailController = require('../controller/patientReportController')
const express = require('express')
const router = express.Router()
const upload = require('../middlewares/fileUpload')



router.post("/add", upload.single('file'), patientReportDetailController.addPatientReportDetail);

router.post("/view", patientReportDetailController.viewPatientReportDetail);

router.get('/download/:filename', patientReportDetailController.downloadFile);

module.exports = router