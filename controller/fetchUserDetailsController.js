const Patientuser = require("../model/patient");

const fetchPatientDetails = async (req, res, next) => {
  const user = await Patientuser.findOne({ accesskey: req.body.accesskey }, {_id:0});
  console.log("user", user);
  try {
    if (!user) {
      return res
        .status(400)
        .json({ error: "Please try to login with correct credentials" });
    } else {
      return res.status(200).json({ user });
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { fetchPatientDetails };
