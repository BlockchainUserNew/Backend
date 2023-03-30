const laboratoryDetailController = require('../controller/laboratoryController')
const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');
const upload = require('../middlewares/fileUpload')


router.post("/add", 
upload.single('file'),
  [
    check("fname")
      .isLength({ min: 3 })
      .withMessage("minimum length 3")
      .trim(),

    check("lname")
      .isLength({ min: 3 })
      .withMessage("minimum length 3")
      .trim(),

    check("email")
      .isEmail()
      .withMessage("invalid email address")
      .normalizeEmail(),

    check("password")
      .isLength({ min: 8, max: 15 })
      .withMessage("min and max length between 8-15")
      .matches(/\d/)
      .withMessage("at least one number needed")
      .matches(/[!@#$%^&*(),.?":{}|<>]/)
      .withMessage("at least one special character needed"),

    check("city")
    .not()
    .isEmpty()
    .withMessage('Please select a city from the dropdown'),

    check("state")
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
 
  laboratoryDetailController.addLaboratoryDetail
);

router.post('/view', laboratoryDetailController.viewLaboratoryDetail)

router.post('/email', laboratoryDetailController.viewLabByEmail)

module.exports = router