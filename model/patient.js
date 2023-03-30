const mongoose = require("mongoose");

const patientDetailSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },

  lname: {
    type: String,
    required: true,
  },

  user_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Users",
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },

  dob: {
    type: Date,
    required: true,
    default: Date.now(),
  },

  email: {
      type: String,
  },

  mobile: {
    type: Number,
    required: true,
    unique: true,
  },

  aadhar: {
    type: Number,
    required: true,
    unique: true,
  },

  bloodGroup: {
    type: String,
    required: true,
  },

  country: {
    type: Object,
    required: true,
  },

  state: {
    type: Object,
    required: true,
  },

  district: {
    type: Object,
    required: true,
  },

  city: {
    type: Object,
    required: true,
  },

  pincode: {
    type: Number,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  file: {
      type: String,
      required: true,
  },

  userName: {
    type: String,
    required: true,
    unique: true,
  },

  // password: {
  //     type: String,
  //     required: true,
  // },

  cpassword: {
    type: String,
    required: true,
  },

  accesskey: {
    type: String,
    // required: true,
    unique: true,
    default: function () {
        const timestamp = Date.now();
        const str = new Date(timestamp).toISOString();
        const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").slice(0, 16);
        return cleanStr; // Output: "20230321T115229976Z"
    },
  },

  active: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Patient", patientDetailSchema);
