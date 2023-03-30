const mongoose = require("mongoose");

const labtestSchema = new mongoose.Schema({
  lab_name: {
    type: String,
    required: true,
  },

  patient_name: {
    type: String,
    required: true,
  },

  test_name: {
    type: String,
    required: true,
  },

  accesskey: {
    type: String,
    // required: true,
  },
});

module.exports = mongoose.model("LabTest", labtestSchema);
