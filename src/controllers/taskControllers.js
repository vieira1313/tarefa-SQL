const knex = require("../database/knex")

const TaskRepository = require("../repositories/taskRepository/TaskRepository")
const TaskCreateService = require("../services/TaskServices/TaskCreateService")
const TaskListService = require("../services/TaskServices/TaskListService")

const taskRepository =  new TaskRepository()

const taskCreateService = new TaskCreateService(taskRepository)
const taskListService = new TaskListService(taskRepository)

 class TaskController {
    async createTask(req, res) {
        const {user_id, title, description} = req.body
           
        await taskCreateService.execute({user_id, title, description})

        return res.status(201).json("tarefa criada com sucesso!")
    }

    async listTask(req, res) {
        const [tasks] = await taskListService.execute()
         return res.status(200).json(tasks)
    }

    async listTaskById(req, res) {
        const {id} = req.params
        const task = await  knex("tasks").where({id})
       return res.status(200).json(task)
    }

    async updateTask(req, res) {
        const {id} = req.params
        const {title, description} = req.body

        await knex("tasks").where({id}).update({title, description})
        return res.status(200).json("resgistro atualizado com sucesso!")

    }

    async updateTaskstatus(req, res){
        const {id} = req.params

        await knex("tasks").where({id}).update({isCompleted: true})
       return  res.status(200).json("status alterado com secesso!")
    }

    async deleteTask (req, res){
        const {id} = req.params
        await knex("tasks").where({id}).delete()
        return res.status(200).json("registro deletado com sucesso!")
        
    }
}
module.exports = TaskController