const DoctorPrescriptionDetail = require("../model/doctorPrescription");
const Patientuser = require("../model/patient");

const addDoctorPrescriptionDetail = async (req, res, next) => {
  try {
    const key = await Patientuser.findOne(
      { accesskey: req.body.accesskey },
      { _id: 0, accesskey: 1 }
    );

    const doctorPrescriptionDetail = new DoctorPrescriptionDetail({
      tablet_name: req.body.tablet_name,
      dosage: req.body.dosage,
      accesskey: key.accesskey,
      doctor_name: req.body.doctor_name,
      date: req.body.date,
      remark: req.body.remark
    });

    const doctorPrescriptionDetailData = await doctorPrescriptionDetail.save();
    res
      .status(200)
      .send({
        success: true,
        msg: "Doctor added successfully",
        datamsg: doctorPrescriptionDetailData,
      });
  } catch (err) {
    res.status(400).send({ success: false, msg: err.message });
  }
};

const viewDoctorPrescriptionDetail = async (req, res, next) => {
  const viewprescription = await DoctorPrescriptionDetail.find(
    { accesskey: req.body.accesskey },
    { accesskey: 0 }
  );
  try {
    if (!viewprescription) {
      return res
        .status(400)
        .json({ error: "Please try using correct accesskey " });
    } else {
      return res.status(200).json({ prescription: viewprescription });
    }
  } catch (e) {
    console.log(e);
  }
};

const viewPatientPrescriptionDetail = async (req, res, next) => {

  try {
      const patdetails = await DoctorPrescriptionDetail.find({}, { _id:0 } );
      res.status(200).json(patdetails);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
}

module.exports = { addDoctorPrescriptionDetail, viewDoctorPrescriptionDetail, viewPatientPrescriptionDetail };
