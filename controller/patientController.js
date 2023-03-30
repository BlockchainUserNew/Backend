const PatientDetail = require('../model/patient');
const Users = require('../model/user');
const jwt = require('jsonwebtoken')
const JWT_SECRET = "PatientAccessKey"


const addPatientDetail = async (req, res, next) => {


    try {

        let patientinfo = { email: req.body.email, password: req.body.password, userType: req.body.userType }
        const UserInsertedId = await Users.insertMany(patientinfo)

        // const fileNames = req.files.map((file) => file.filename);

        const patientDetail = new PatientDetail({

            fname: req.body.fname,
            lname: req.body.lname,
            gender: req.body.gender,
            user_id: UserInsertedId[0]._id,
            dob: req.body.dob,
            email: UserInsertedId[0].email,
            mobile: req.body.mobile,
            aadhar: req.body.aadhar,
            bloodGroup: req.body.bloodGroup,
            country: req.body.country,
            state: req.body.state,
            district: req.body.district,
            city: req.body.city,
            pincode: req.body.pincode,
            address: req.body.address,
            // file: req.body.file,
            userName: req.body.userName,
            // password: req.body.password,
            cpassword: req.body.cpassword,
            accesskey: req.body.accesskey,
            active: req.body.active,
            // file: fileNames
            file: req.file.filename
        });

        const patientDetailData = await patientDetail.save();

        const data = {
            user: {
                id: patientDetailData.id
            }
        }

        const accesstoken = jwt.sign(data, JWT_SECRET)

        res.status(200).send({ success: true, msg: "Patient added successfully", datamsg: patientDetailData, accesstoken});



    } catch (err) {
        res.status(400).send({ success: false, msg: err.message });
    }


}


const viewPatientDetail = async (req, res, next) => {

    try {
        const patients = await PatientDetail.find({}, { _id:0, fname:1 } );
        res.status(200).json(patients);
      } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
      }


}

const viewPatientByEmail = async (req, res, next) => {

    try {
        const patients = await PatientDetail.findOne({ email: req.body.email }, { _id: 0, user_id: 0 });
        res.status(200).json(patients);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }


}


module.exports = { addPatientDetail, viewPatientDetail, viewPatientByEmail }