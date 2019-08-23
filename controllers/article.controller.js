const Article = require('../modles/Article.model');
const {validationResult} = require('express-validator');

exports.getAll = async (req, res, next) => {
    try {
        const articles = await Article.find().exec();
        return res.status(200).json(articles);
    } catch (error) {
        return res.status(404).json('Articles not found')
    }
}

exports.getItem = async (req, res, next) => {
    const {id} = req.params;
    try {
        const article = await Article.findById(id).exec();
        if (!article) {
            return res.status(404).json('Article not found')
        }
        return res.status(200).json(article);
    } catch (error) {
        return res.status(404).json('Article not found')
    }
}

exports.add = async (req, res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        return res.status(400).json(validationErrors.array());
    }
    try {
        const article = await new Article({...req.body}).save();
        return res.status(201).json(article);
    } catch (error) {
        next(error)
    }
}

exports.update = async (req, res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        return res.status(400).json(validationErrors.array());
    }
    try {
        const {id} = req.params;
        const article = await Article.findOneAndUpdate(
            {_id: id}, 
            {$set: {...req.body}},
            {new: true}
        ).exec();
        return res.status(201).json(article);
    } catch (error) {
        next(error)
    }
}

exports.delete = async (req, res, next) => {
    try {
        const {id} = req.params;
        await Article.findByIdAndDelete(id).exec();
        return res.status(201).json(id);
    } catch (error) {
        next(error)
    }
}