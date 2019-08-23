const Category = require('../../modles/Category.model.js')

const getParentCategories = async(doc) => {
    const list = [doc];
    let id = doc.parent
    while(id) {
        const parent = await Category.findById(id).exec();
        list.push(parent);
        id = parent.parent
    }
    return list.reverse()
}

module.exports = getParentCategories;