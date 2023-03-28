const mongoose = require("mongoose");

const patientReportSchema = new mongoose.Schema({
  patient_name: {
    type: String,
    required: true,
  },

  lab_name: {
    type: String,
    required: true,
  },

  test_name: {
    type: String,
    required: true,
  },

  file: {
      type: [String],
      required: true,
  },
});

module.exports = mongoose.model("PatientReport", patientReportSchema);
