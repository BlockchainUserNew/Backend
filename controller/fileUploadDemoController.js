const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const FileDetail = require('../model/fileUploadDemo')

const createPost = async (req, res, next) => {


    try {
        const fileNames = req.files.map((file) => file.filename);
        const fileDetail = new FileDetail({

            title: req.body.title,
            desc: req.body.desc,
            file: fileNames
        });

        const fileDetailData = await fileDetail.save();

        const csvWriter = createCsvWriter({
            path: path.join(__dirname, '../public/csv files', 'file_detail.csv'),
            header: [
              { id: 'title', title: 'Title' },
              { id: 'desc', title: 'Description' },
              { id: 'file', title: 'File' },
            ],
          });

          const data = [{ title: fileDetailData.title, desc: fileDetailData.desc, file: fileDetailData.file }];
          csvWriter.writeRecords(data).then(() => {
            res.status(200).send({ success: true, msg: "File added successfully", datamsg: fileDetailData });
          });



    } catch (err) {
        res.status(400).send({ success: false, msg: err.message });
    }


}


module.exports = { createPost }