const {body} = require('express-validator');

exports.categoryValidator = [
    body('name')
        .not().isEmpty().withMessage('Name is required')
]


exports.articleValidator = [
    body('title')
        .not().isEmpty().withMessage('Title is required'),
    body('subTitle')
        .not().isEmpty().withMessage('Subtitle is required'),
    body('text')
        .not().isEmpty().withMessage('Text is required'),
    body('category')
        .not().isEmpty().withMessage('Category is required')
]
