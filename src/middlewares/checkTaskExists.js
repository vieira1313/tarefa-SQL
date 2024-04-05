const  knex  = require("../database/knex");

async function checkTaskExists(req, res, next) {
    const {id} = req.params
    const task = await  knex("tasks").where({id})
   

    if(task.length === 0) {
        return res.status(400).json("tarefa não encontrada")
    }
    next()
}

module.exports = checkTaskExists