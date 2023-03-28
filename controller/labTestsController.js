const LabTestsDetail = require('../model/labTests');
const Patientuser = require("../model/patient");

const addLabTestDetail = async (req, res, next) => {


    try {

      const key = await Patientuser.findOne(
        { accesskey: req.body.accesskey },
        { _id: 0, accesskey: 1, fname:1, lname:1 }
      );

        const labTestsDetail = new LabTestsDetail({

            lab_name: req.body.lab_name,
            patient_name: key.fname + " "+ key.lname,
            test_name: req.body.test_name,
            accesskey: key.accesskey,

        });

        const labTestsDetailData = await labTestsDetail.save();
        res.status(200).send({ success: true, msg: "LabTest added successfully", datamsg: labTestsDetailData});



    } catch (err) {
        res.status(400).send({ success: false, msg: err.message });
    }


}

const viewLabTestDetail = async (req, res, next) => {
  const viewlabtest = await LabTestsDetail.find(
    { accesskey: req.body.accesskey },
    { accesskey: 0 }
  );
  try {
    if (!viewlabtest) {
      return res
        .status(400)
        .json({ error: "Please try using correct accesskey " });
    } else {
      return res.status(200).json({ test: viewlabtest });
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { addLabTestDetail, viewLabTestDetail }