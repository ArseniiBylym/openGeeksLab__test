const Category = require('../../modles/Category.model.js')

const getParents = async({model, doc}) => {
    const list = [doc];
    let id = doc.parent
    while(id) {
        const parent = await model.findById(id).exec();
        list.push(parent);
        id = parent.parent
    }
    return list.reverse()
}

module.exports = getParents;