var express = require('express');
var router = express.Router();
const {getAll, create, getOne} = require('./controller');

/* GET home page. */
router.get('/todos', getAll);
router.post('/todos', create);
router.get('/todos/:id', getOne);

module.exports = router;
