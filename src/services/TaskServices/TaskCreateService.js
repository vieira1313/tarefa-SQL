class TaskCreateService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository
    }
    async execute({user_id, title, description}) {
        const taskCreated = await this.taskRepository.createTask({user_id, title, description})
        return taskCreated
    }
}
module.exports = TaskCreateService