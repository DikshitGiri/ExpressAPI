const express = require('express');
const router = express.Router();
// exports.router;
const { createUser } = require('../controllers/userController');
const { validateUserSignup  } = require('../middleware/validation/user');



// const { userValidation } = require('../middleware/validation/user');


// router.post('/', (req, res)=> {
//     createUser;
// });
router.post("/",validateUserSignup ,createUser);
module.exports = router;