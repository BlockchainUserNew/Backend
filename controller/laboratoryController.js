const LaboratoryDetail = require('../model/laboratory');
const Users = require('../model/user');


const addLaboratoryDetail = async (req, res, next) => {


    try {


        let laboratoryinfo = { email: req.body.email, password: req.body.password, userType: req.body.userType }
        const UserInsertedId = await Users.insertMany(laboratoryinfo)

        // const fileNames = req.files.map((file) => file.filename);

        const laboratoryDetail = new LaboratoryDetail({

            fname: req.body.fname,
            mname: req.body.mname,
            user_id: UserInsertedId[0]._id,
            lname: req.body.lname,
            gender: req.body.gender,
            lab: req.body.lab,
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
            // cpassword: req.body.cpassword,
            active: req.body.active,
            // file: fileNames
            file: req.file.filename
        });

        const laboratoryDetailData = await laboratoryDetail.save();
        res.status(200).send({ success: true, msg: "Laboratory added successfully", datamsg: laboratoryDetailData});



    } catch (err) {
        res.status(400).send({ success: false, msg: err.message });
    }


}


const viewLaboratoryDetail = async (req, res, next) => {

    try {
        const labs = await LaboratoryDetail.find({}, { _id:0 } );
        res.status(200).json(labs);
      } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
      }


}

const viewLabByEmail = async (req, res, next) => {

    try {
        const labs = await LaboratoryDetail.findOne({ email: req.body.email }, { _id: 0, user_id: 0 });
        res.status(200).json(labs);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }


}

module.exports = { addLaboratoryDetail, viewLaboratoryDetail, viewLabByEmail }