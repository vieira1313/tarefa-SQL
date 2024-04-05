const knex = require("../../database/knex")
class TaskRepository{
    async createTask({user_id, title, description}) {
         const isCompleted = false

        const taskId = await knex ("tasks").insert({title, description, user_id, isCompleted})

        return {id: taskId}
    }

    async listTasks() {
            const [tasks] = await  knex("tasks")
             return tasks
    }

    async listTaskById({Task_id}) {
        const tasks = await  knex("tasks").where({id: Task_id})
       return tasks

    }

    async updateTask({Task_id, nome, email}) {
        const Task = await knex("Tasks").where({id: Task_id})

        Task.nome = nome ?? Task.nome
        Task.email = email ?? Task.email

     await knex("Tasks").where({id: Task_id}).update({nome: Task.nome, email: Task.email})

        return Task
    }

    async updateTaskStatus({Task_id}) {

        await knex("tasks").where({Task_id}).update({isCompleted: true})
       return tasks
    }

}
module.exports = TaskRepository