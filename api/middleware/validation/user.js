const { check } = require('express-validator');
exports.validateUserSignup = async (req, res) => {
    [check('username').trim().not().isEmpty().isLength({ min: 3, max: 20 }).withMessage("name must be within 3 to 20 character long"),
    check('email').normalizeEmail().isEmail().not().isEmpty().withMessage('invalid email'),
    check('address').trim().not().isEmpty().withMessage('you cannot leave it blank')

    ]
};
