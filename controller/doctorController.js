const DoctorDetail = require('../model/doctor');


const addDoctorDetail = async (req, res, next) => {
const Users = require('../model/user');

    try {


        let doctorinfo = { email: req.body.email, password: req.body.password, userType: req.body.userType }
        const UserInsertedId = await Users.insertMany(doctorinfo)

        // const fileNames = req.files.map((file) => file.filename);

        const doctorDetail = new DoctorDetail({

            fname: req.body.fname,
            mname: req.body.mname,
            user_id: UserInsertedId[0]._id,
            lname: req.body.lname,
            gender: req.body.gender,
            hospital: req.body.hospital,
            practicingIn: req.body.practicingIn,
            specialist: req.body.specialist,
            code: req.body.code,
            GST: req.body.GST,
            email: UserInsertedId[0].email,
            mobile: req.body.mobile,
            taluka: req.body.taluka,
            state: req.body.state,
            district: req.body.district,
            city: req.body.city,
            address: req.body.address,
            file: req.body.file,
            userName: req.body.userName,
            // password: req.body.password,
            cpassword: req.body.cpassword,
            active: req.body.active,
            // file: fileNames
            file: req.file.filename
        });

        const doctorDetailData = await doctorDetail.save();
        res.status(200).send({ success: true, msg: "Doctor added successfully", datamsg: doctorDetailData});



    } catch (err) {
        res.status(400).send({ success: false, msg: err.message });
    }


}

const viewDoctorDetail = async (req, res, next) => {

    try {
        const doctors = await DoctorDetail.find({}, { _id:0, fname:1 } );
        res.status(200).json(doctors);
      } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
      }


}

const viewDoctorByEmail = async (req, res, next) => {

    try {
        const doctors = await DoctorDetail.findOne({ email: req.body.email }, { _id: 0, user_id: 0 });
        res.status(200).json(doctors);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }


}

module.exports = { addDoctorDetail, viewDoctorDetail ,viewDoctorByEmail }