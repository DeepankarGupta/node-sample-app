const { sample } = require("../services");

const getSample = async (req, res, next) => {
    try {
        const result = await sample.getSample();
        res.status(200).send({'items': result});
    } catch(err) {
        res.status(500).send(err);
    }
}

const postSample = async (req, res, next) => {
    try {
        const result = await sample.postSample(req.body);
        res.status(201).send(result);
    } catch(err) {
        res.status(500).send(err);
    }
}

module.exports = {
    getSample,
    postSample
}