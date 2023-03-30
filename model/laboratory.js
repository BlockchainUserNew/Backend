const mongoose = require('mongoose');

const laboratoryDetailSchema = new mongoose.Schema({

    fname: {
        type: String,
        required: true,
    },

    mname: {
        type: String,
        required: true,
    },

    lname: {
        type: String,
        required: true
    },

    user_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Users",
        required: true,
    },

    gender: {
        type: String,
        required: true
    },

    email: {
        type: String,
    },

    lab: {
        type: String,
        required: true,
        unique: true
    },

    specialist: {
        type: String,
        required: true,
    },

    code: {
        type: String,
        required: true,
        unique: true
    },

    mobile: {
        type: Number,
        required: true,
        unique: true
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

    taluka: {
        type: Object,
        required: true,
    },

    GST: {
        type: String,
        required: true,
        unique: true
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
        unique: true
    },

    // password: {
    //     type: String,
    //     required: true,
    // },

    cpassword: {
        type: String,
        required: true,
    },

    active: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model("Laboratory", laboratoryDetailSchema);