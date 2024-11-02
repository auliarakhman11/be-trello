const {Todo, Item} = require('../../db/models');

module.exports = {
    getAll : async(req, res)=>{
        try {
            const result = await Todo.findAll({
                attributes: ['id', 'name'],
                include: {
                    model: Item,
                    attributes: ['id', 'name','TodoId'],
                  },
              });
            res.status(200).json({
                message: 'success',
                data: result,
            });
        } catch (err) {
            console.log(err);
        }
    },

    create : async(req,res)=>{
        try {
            const {name} = req.body;
            const result = await Todo.create({name});

            res.status(201).json({
                message: 'success',
                data: result,
            });
        } catch (err) {
            
        }
    },

    getOne : async(req,res)=>{
        try {
            const {id} = req.params;
            const result = await Todo.findOne({
                where : {id : id},
                attributes: ['id', 'name'],
            });

            res.status(200).json({
                message: 'success',
                data: result,
            });
        } catch (err) {
            
        }
    },
}