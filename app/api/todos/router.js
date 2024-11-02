var express = require('express');
var router = express.Router();
const {getAll} = require('./controller');

/* GET home page. */
router.get('/todos', getAll);

module.exports = router;
