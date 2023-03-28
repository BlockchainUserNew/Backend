const express = require('express')
const router = express.Router()
const upload = require('../middlewares/fileUpload')

const fileUploadDemoController = require('../controller/fileUploadDemoController')

router.post('/add', upload.array('image', 10) ,fileUploadDemoController.createPost)

module.exports = router