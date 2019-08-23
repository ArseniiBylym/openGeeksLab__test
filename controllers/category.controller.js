const Category = require('../modles/Category.model');
const {validationResult} = require('express-validator');

exports.getAll = async (req, res, next) => {
    try {
        const categories = await Category.find().exec();
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(404).json('Categories not found')
    }
}

exports.getItem = async (req, res, next) => {
    const {id} = req.params;
    try {
        const category = await Category.findById(id);
        return res.status(200).json(category);
    } catch (error) {
        return res.status(404).json('Category not found')
    }
}

exports.add = async (req, res, next) => {
    console.log(req.body)
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        return res.status(400).json(validationErrors.array());
    }
    try {
        const category = await new Category({...req.body}).save();
        return res.status(201).json(category);
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
        const category = await Category.findOneAndUpdate(
            {_id: id}, 
            {$set: {...req.body}},
            {new: true}
        );
        return res.status(201).json(category);
    } catch (error) {
        next(error)
    }
}

exports.delete = async (req, res, next) => {
    try {
        const {id} = req.params;
        await Category.findByIdAndDelete(id);
        return res.status(201).json(id);
    } catch (error) {
        next(error)
    }
}