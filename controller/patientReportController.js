const PatientReportDetail = require('../model/patientReport');


const addPatientReportDetail = async (req, res, next) => {


    try {

        const fileNames = req.files.map((file) => file.filename);

        const patientReportDetail = new PatientReportDetail({

            lab_name: req.body.lab_name,
            patient_name: req.body.patient_name,
            test_name: req.body.test_name,
            file: fileNames

        });

        const patientReportDetailData = await patientReportDetail.save();
        res.status(200).send({ success: true, msg: "LabTest added successfully", datamsg: patientReportDetailData});



    } catch (err) {
        res.status(400).send({ success: false, msg: err.message });
    }


}

const viewPatientReportDetail = async (req, res, next) => {
    const viewreportdetail = await PatientReportDetail.find({ lab_name: req.body.lab_name }, { lab_name:0 });
    try {
      if (!viewreportdetail) {
        return res.status(400).json({ error: "Please try using correct labname " });
      }else{
          return res.status(200).json( { patientReportDetail: viewreportdetail } );
      }
    } catch (e) {
      console.log(e)
    }
  }

module.exports = { addPatientReportDetail, viewPatientReportDetail }