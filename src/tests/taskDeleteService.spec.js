
const UserRepositoryInMemory = require("../repositories/userRepository/userRepositoryinMemory")
const TaskRepositoryInMemory = require("../repositories/taskRepository/TaskRepositoryinMemory")

const TaskCreateService = require("../services/TaskServices/TaskCreateService")
const UserCreateService = require("../services/UserServices/UserCreateService")
const TaskDeleteService = require("../services/TaskServices/TaskDeleteService") 
const TaskListService = require("../services/TaskServices/TaskListService")
describe("TaskDeleteService", () => {
    let taskRepository = null
    let taskCreateService = null
    let taskListService = null
    let taskDeleteService = null
    let userRepository = null
    let userCreateService = null

    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)

        taskRepository = new TaskRepositoryInMemory();
        taskCreateService = new TaskCreateService(taskRepository)
        taskDeleteService = new TaskDeleteService(taskRepository)
        taskListService = new TaskListService(taskRepository)

    });

    it("should be able to delete a task", async () => {
        const user = {
            nome: "user test",
            email: "user@test.com",
            password: "123"
        }
        const userCreated = await userCreateService.execute(user);
        

        const task = {
            title: "testando api com jest",
            description: "Elaborar teste unitarios na aplicação",
            user_id: userCreated.id
        }
        
        await taskCreateService.execute(task)  

        await taskDeleteService.execute(task)

        const list = await taskListService.execute()
      

        expect(list).not.toHaveProperty("title", "testando api com jest",)
      
    })
})
     
