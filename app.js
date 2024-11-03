const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const todoRouter = require("./app/api/todos/router");
const itemRouter = require("./app/api/items/router");

const URL = "/api/v1";
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
   res.json({
    message: "Welcome",
    version: "1.0"
   }); 
});

app.use(`${URL}`, todoRouter);
app.use(`${URL}`, itemRouter);

//handle errors
app.use(function (req, res, next) {
   const err = new Error('Not Found');
   err.status = 404;
   next(err);
});

app.use(function (err, req, res, next) {
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};
   res.status(err.status || 500).json({message: err.message});
});

module.exports = app;
