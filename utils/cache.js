const mongoose = require('mongoose');
const redis = require('redis');
const util = require('util');
require('dotenv').config();

const client = redis.createClient(process.env.REDIS_URL);
client.hget = util.promisify(client.hget);
const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function (options = {}) {
    this.useCache = true;
    this.hashKey = JSON.stringify(options.key || '');
    this.hashTime = JSON.stringify(options.time || '')

    return this;
}

mongoose.Query.prototype.exec = async function() {

    const {useCache, hashKey, hashTime} = this;
    if (!useCache) {
        return exec.apply(this, arguments);
    }

    const key = JSON.stringify(
        Object.assign({}, this.getQuery(), {
            collection: this.mongooseCollection.name
        })
    )

    const cachedValue = await client.hget(hashKey, key);

    if (cachedValue) {
        console.log(hashKey, ': return from cache')
        const doc = JSON.parse(cachedValue);

        return Array.isArray(doc)
        ? doc.map(d => new this.model(d))
        : new this.model(doc);
    }
    console.log(hashKey, ': return from db')

    const result = await exec.apply(this, arguments);

    console.log(hashKey)
    console.log(key)
    client.hset(hashKey, key, JSON.stringify(result));
    if (hashTime) {
        client.expire(hashKey, hashTime)
    }

    return result;
}

module.exports = {
    clearCache(hashKey) {
        client.del(JSON.stringify(hashKey))
    }
}