
const UserRepositoryInMemory = require("../repositories/userRepository/userRepositoryinMemory")
const ThaskRepositoryInMemory = require("../repositories/taskRepository/TaskRepositoryinMemory")

const TaskCreateService = require("../services/TaskServices/TaskCreateService")
const UserCreateService = require("../services/UserServices/UserCreateService")


describe("ThaskCreateService", () => {
    let taskRepository = null
    let taskCreateService = null
    let userRepository = null
    let userCreateService = null

    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)

        taskRepository = new ThaskRepositoryInMemory();
        taskCreateService = new TaskCreateService(taskRepository)
    });

    it("should be able to create a new task", async () => {
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
        const taskCreated = await taskCreateService.execute(task)
        expect(taskCreated).toHaveProperty('id', taskCreated.id)
      
    })
})
     
