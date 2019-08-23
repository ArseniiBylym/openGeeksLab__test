const {Schema, model} = require('mongoose');

const articleSchema = new Schema({
    title: {type: String, required: true},
    subTitle: {type: String, required: true},
    text: {type: String, required: true},
    category: {type: Schema.Types.ObjectId, ref: 'Category', required: true, autoIndex: true},
}, {
    timestamps: true
})

module.exports = model('Article', articleSchema)