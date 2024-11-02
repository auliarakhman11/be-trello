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
    }
}