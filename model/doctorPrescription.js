const mongoose = require('mongoose');

const doctorPrescriptionSchema = new mongoose.Schema({

    tablet_name: {
        type: String,
        required: true,
    },

    dosage: {
        type: String,
        required: true,
    },

    accesskey: {
        type: String,
        required: true
    },

    doctor_name: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    remark: {
        type: String,
        default: "No remarks"
    },

});

module.exports = mongoose.model("DoctorPrescription", doctorPrescriptionSchema);