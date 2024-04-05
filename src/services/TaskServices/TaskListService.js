

class TaskListService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository
    }
    async execute() {
        const tasks = await this.taskRepository.listTask()
        return tasks
    }
}
module.exports = TaskListService