const { body, validationResult, param } = require('express-validator');
const {Todo} = require('../../db/models');

module.exports = {
    validateCreate : [
        body('name').notEmpty().withMessage('Nama tidak boleh kosong'),
        body('TodoId')
        .notEmpty().withMessage('TodoId tidak boleh kosong')
        .bail().isNumeric().withMessage('TodoId harus bertype integer')
        .bail().custom(async (value, {req}) => {
            const checking = await Todo.findOne({where: {id : value} });
            if (checking === null) {
                return Promise.reject();
            }
        }).withMessage("id tidak ada di database"),
        (req, res, next) => {
            const error = validationResult(req);
            if (!error.isEmpty()) {
                return res.status(422).json({
                    message: "error",
                    error: error.array(),
                });
            }

            next();
          },
    ],

    validateOne: [
        param('id')
        .notEmpty().withMessage('id tidak boleh kosong')
        .bail().isNumeric().withMessage('id harus bertype integer')
        .bail().custom(async (value, {req}) => {
            const checking = await Todo.findOne({where: {id : value} });
            if (checking === null) {
                return Promise.reject();
            }
        }).withMessage("id tidak ada di database"),
        (req, res, next) => {
            const error = validationResult(req);
            if (!error.isEmpty()) {
                return res.status(422).json({
                    message: "error",
                    error: error.array(),
                });
            }

            next();
          },
        
    ],

    validateUpdate: [
        param('id')
        .notEmpty().withMessage('id tidak boleh kosong')
        .bail().isNumeric().withMessage('id harus bertype integer')
        .bail().custom(async (value, {req}) => {
            const checking = await Todo.findOne({where: {id : value} });
            if (checking === null) {
                return Promise.reject();
            }
        }).withMessage("id tidak ada di database"),
        body('name').notEmpty().withMessage('Nama tidak boleh kosong'),
        (req, res, next) => {
            const error = validationResult(req);
            if (!error.isEmpty()) {
                return res.status(422).json({
                    message: "error",
                    error: error.array(),
                });
            }

            next();
          },
        
    ],
}