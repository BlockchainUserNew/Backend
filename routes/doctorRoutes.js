const doctorDetailController = require('../controller/doctorController')
const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
//const upload = require('../middlewares/fileUpload')


router.post("/add", 
//upload.single('image'),
  [
    body("fname")
      .isLength({ min: 3 })
      .withMessage("minimum length 3")
      .trim(),

    body("lname")
      .isLength({ min: 3 })
      .withMessage("minimum length 3")
      .trim(),

    body("email")
      .isEmail()
      .withMessage("invalid email address")
      .normalizeEmail(),

    body("password")
      .isLength({ min: 8, max: 15 })
      .withMessage("min and max length between 8-15")
      .matches(/\d/)
      .withMessage("at least one number needed")
      .matches(/[!@#$%^&*(),.?":{}|<>]/)
      .withMessage("at least one special character needed"),

    body("city")
    .not()
    .isEmpty()
    .withMessage('Please select a city from the dropdown'),

    body("state")
    .not()
    .isEmpty()
    .withMessage('Please select a state from the dropdown'),
  ],
  async (req, res, next) => {

    const error = validationResult(req)

    const hasError = !error.isEmpty();

    if (hasError) {
      res.status(422).json({ error: error.array() });
    } else {
      next();
    }

  },
  doctorDetailController.addDoctorDetail
);

router.post('/view', doctorDetailController.viewDoctorDetail)

router.post('/email', doctorDetailController.viewDoctorByEmail)

module.exports = router