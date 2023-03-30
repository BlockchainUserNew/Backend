const verifyUserController = require('../controller/verifyUserController')
const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');

router.post("/", [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Enter a valid password').exists({checkFalsy: true}),
  body('userType').not().isEmpty().withMessage('Please select a usertype from the dropdown'),
],
  async (req, res, next) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }else{
      next()
    }

  },
  verifyUserController.verifyUserLogin
);

module.exports = router