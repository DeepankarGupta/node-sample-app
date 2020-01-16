const { sample } = require('../controllers');
const router = require('express').Router();

router.get('/', sample.getSample);
router.post('/', sample.postSample);

module.exports = router;