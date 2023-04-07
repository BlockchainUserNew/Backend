const PatientReportDetail = require("../model/patientReport");
const path = require('path');

const addPatientReportDetail = async (req, res, next) => {
  try {
    // const fileNames = req.files.map((file) => file.filename);

    const patientReportDetail = new PatientReportDetail({
      lab_name: req.body.lab_name,
      patient_name: req.body.patient_name,
      test_name: req.body.test_name,
      // file: fileNames
      accesskey: req.body.accesskey,
      date: req.body.date,
      file: req.file.filename,
    });

    const patientReportDetailData = await patientReportDetail.save();
    res
      .status(200)
      .send({
        success: true,
        msg: "LabTest added successfully",
        datamsg: patientReportDetailData,
      });
  } catch (err) {
    res.status(400).send({ success: false, msg: err.message });
  }
};

const viewPatientReportDetail = async (req, res, next) => {
  const viewreportdetail = await PatientReportDetail.find(
    { accesskey: req.body.accesskey },
    { accesskey: 0 }
  );
  try {
    if (!viewreportdetail) {
      return res
        .status(400)
        .json({ error: "Please try using correct accesskey " });
    } else {
      return res.status(200).json({ reportdetail: viewreportdetail });
    }
  } catch (e) {
    console.log(e);
  }
};

const viewPatientReportDates = async (req, res, next) => {
  const viewreportdate = await PatientReportDetail.distinct('date');
  // const viewreportdateWithProps = viewreportdate.map(date => ({ date }))
  try {
    if (!viewreportdate) {
      return res
        .status(400)
        .json({ error: "Please try using correct accesskey " });
    } else {
      return res.status(200).json(viewreportdate );
    }
  } catch (e) {
    console.log(e);
  }
};

const downloadFile = async (req, res, next) => {
  try {
    const filename = req.params.filename;
    const filepath = path.join(__dirname, '../public/postImages', filename);
    res.download(filepath, filename);
  } catch (err) {
    res.status(400).send({ success: false, msg: err.message });
  }
};

// console.log(__filename);

module.exports = { addPatientReportDetail, viewPatientReportDetail, downloadFile, viewPatientReportDates };
