const { getDB } = require("../db")

const getSample = async () => {
    try {
        const items = await getDB().collection('sampleCollection').find({}).toArray()
        return items;
    } catch (err) {
        throw new Error(err);
    }
}

const postSample = async (item) => {
    try {
        const result = await getDB().collection('sampleCollection').insertOne(item)
        return result;
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    getSample,
    postSample
}