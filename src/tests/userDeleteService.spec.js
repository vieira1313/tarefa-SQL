const UserRepositoryInMemory = require("../repositories/userRepository/userRepositoryinMemory")
const UserCreateService = require("../services/UserServices/UserCreateService")
const UserDeleteService = require("../services/UserServices/UserDeleteService")
const UserListService = require("../services/UserServices/UserListService")

describe("UserDeleteService", () => {
    let userRepository = null
    let userCreateService = null
    let userDeleteService = null
    let userListService = null

    it("should be possible delete an user", async () => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)
        userDeleteService = new UserDeleteService(userRepository)
        userListService = new UserListService(userRepository)
        const user = {
            nome: "user test1",
            email: "user@test.com",
            password: "123"
        }
        await userCreateService.execute(user)
        await userDeleteService.execute(user)
        const users = await userListService.execute(user)
        expect(users).toHaveLength(0)
    })

    it(" user should be possible delete an specific user", async () => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)
        userDeleteService = new UserDeleteService(userRepository)
        userListService = new UserListService(userRepository)
        const user1 = {
            nome: "user test1",
            email: "user1@test.com",
            password: "123"
        }
        const user2 = {
            nome: "user test2",
            email: "user2@test.com",
            password: "123"
        }
        const firstUser = await userCreateService.execute(user1)
        const secondUser = await userCreateService.execute(user2)

        const list = await userListService.execute()

        await userDeleteService.execute(firstUser)

        expect(list).not.toHaveProperty("nome", "user test 1")
    })
})