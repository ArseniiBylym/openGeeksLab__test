const Category = require('../modles/Category.model');
const Article = require('../modles/Article.model');
const Recipe = require('../modles/Recipe.model');
const {validationResult} = require('express-validator');
const getParentCategories = require('../utils/helpers/getParentCategories');
const {clearCache} = require('../utils/cache');

exports.getAll = async (req, res, next) => {
    try {
        const categories = await Category.find().cache({
            key: 'allCategories',
            time: 10 * 60
        });
        return res.status(200).json(categories);
    } catch (error) {
        console.log(error)
        return res.status(404).json('Categories not found')
    }
}

exports.getItem = async (req, res, next) => {
    const {getParents} = req.query;
    const {id} = req.params;

    try {
        const category = await Category.findById(id).exec();
        if (!category) { 
            return res.status(404).json('Category not found')
        }
        if (getParents) {
            const list = await getParentCategories(category);
            return res.status(200).json(list);
        } 
        return res.status(200).json(category);
    } catch (error) {
       next(error)
    }
}

exports.add = async (req, res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        return res.status(400).json(validationErrors.array());
    }
    try {
        const category = await new Category({...req.body}).save();
        clearCache('allCategories');
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
        clearCache('allCategories');
        return res.status(201).json(category);
    } catch (error) {
        next(error)
    }
}

exports.delete = async (req, res, next) => {
    try {
        const {id} = req.params;
        const category = await Category.findById(id).exec();
        await Category.updateMany({parent: category._id}, {parent: category.parent || null})
        if (category.parent) {
            await Article.updateMany({category: category._id}, {category: category.parent})
            await Recipe.updateMany({category: category._id}, {category: category.parent})
        } else {
            await Article.deleteMany({category: category._id});
            await Recipe.deleteMany({category: category._id});
        }
        await Category.findByIdAndDelete(id);
        clearCache('allCategories');
        return res.status(201).json(id);
    } catch (error) {
        next(error)
    }
}