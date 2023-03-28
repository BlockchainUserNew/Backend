const UsersLogin = require('../model/user')

const verifyUserLogin = async (req, res, next) => {
    const user = await UsersLogin.findOne(
        {
            email: req.body.email,
            userType: req.body.userType,
            password: req.body.password
        }
    );
    let success = false
    try {
        if (!user) {
            success = false
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }else{
            success = true
            return res.status(200).json({ success: true, msg: "Logged in successfully", user});
        }

    } catch (e) {
        console.log(e)
    }
}

module.exports = { verifyUserLogin }