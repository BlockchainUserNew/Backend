// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');
const fs = require('fs');
const FileDetail = require('../model/fileUploadDemo')

const createPost = async (req, res, next) => {


  try {
    // const fileNames = req.files.map((file) => file.filename);
    const fileDetail = new FileDetail({

      title: req.body.title,
      desc: req.body.desc,
      file: req.file.filename
    });

    const fileDetailData = await fileDetail.save();

    // const csvWriter = createCsvWriter({
    //     path: path.join(__dirname, '../public/csv files', 'file_detail.csv'),
    //     header: [
    //       { id: 'title', title: 'Title' },
    //       { id: 'desc', title: 'Description' },
    //       { id: 'file', title: 'File' },
    //     ],
    //   });

    // const data = [{ title: fileDetailData.title, desc: fileDetailData.desc, file: fileDetailData.file }];
    // csvWriter.writeRecords(data).then(() => { });

    res.status(200).send({ success: true, msg: "File added successfully", datamsg: fileDetailData });




  } catch (err) {
    res.status(400).send({ success: false, msg: err.message });
  }


}

const downloadFile = (req, res) => {
  const filePath = path.join(__dirname, '../public/postImages', req.params.filename);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      console.error(err);
      res.status(404).send('File not found');
      return;
    }

    const fileStream = fs.createReadStream(filePath);
    res.writeHead(200, {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename=${req.params.filename}`,
      'Content-Length': stats.size
    });

    fileStream.pipe(res);
  });
};


module.exports = { createPost, downloadFile }