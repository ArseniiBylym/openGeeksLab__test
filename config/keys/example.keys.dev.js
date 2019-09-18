// create new file keys.dev.js in the same folder and copy all content from the file

exports.module = function () {
    return process.env.RUN_WITH_DOCKER ? {
        MONGO_DB_URI: 'mongodb://mongo:27017/product_categories'
    } : {
        MONGO_DB_URI: 'mongodb+srv://test:test@cluster0-zapdy.mongodb.net/opengeekslab?retryWrites=true&w=majority',
        REDIS_URL: 'redis://127.0.0.1:6379'
    }
}();