var express = require('express');
var router = express.Router();
const {getAll, create, getOne, update, destroy} = require('./controller');

/* GET home page. */
router.get('/todos', getAll);
router.post('/todos', create);
router.get('/todos/:id', getOne);
router.put('/todos/:id', update);
router.delete('/todos/:id', destroy);
module.exports = router;
