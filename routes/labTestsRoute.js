const labTestsDetailController = require('../controller/labTestsController')
const express = require('express')
const router = express.Router()



router.post("/add", labTestsDetailController.addLabTestDetail);

router.post("/view", labTestsDetailController.viewLabTestDetail);

module.exports = router