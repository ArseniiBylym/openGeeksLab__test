const {Schema, model} = require('mongoose');

const recipeChema = new Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    category: {type: Schema.Types.ObjectId, ref: 'Category', required: true},
}, {
    timestamps: true
})

module.exports = model('Article', recipeChema)