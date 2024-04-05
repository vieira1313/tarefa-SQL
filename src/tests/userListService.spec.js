const UserRepositoryInMemory = require("../repositories/userRepository/userRepositoryinMemory")
const UserCreateService = require("../services/UserServices/UserCreateService")
const UserListService = require("../services/UserServices/UserListService")

describe("UserCreateService", () => {
    let userRepository = null
    let userCreateService = null
    let userListService = null

    it("user should be created", async () => {
        const user1 = {
            nome: "user test1",
            email: "user@test.com",
            password: "123"
        }
        const user2 = {
            nome: "user test2",
            email: "user@test.com",
            password: "123"
        }
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)
        userListService = new UserListService(userRepository)

        await userCreateService.execute(user1)
        await userCreateService.execute(user2)

        const listUsers = await userListService.execute()

        expect(listUsers).toEqual(expect.arrayContaining(listUsers))
    })
})