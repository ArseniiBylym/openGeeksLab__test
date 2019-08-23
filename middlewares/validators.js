const {body} = require('express-validator');

exports.categoryValidator = [
    body('name')
        .not().isEmpty().withMessage('Name is required')
]
