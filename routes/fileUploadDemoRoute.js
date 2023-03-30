const express = require('express')
const router = express.Router()
const upload = require('../middlewares/fileUpload')

const fileUploadDemoController = require('../controller/fileUploadDemoController')

router.post('/add', upload.single('file') ,fileUploadDemoController.createPost)

router.get('/download/:filename', fileUploadDemoController.downloadFile);

module.exports = router