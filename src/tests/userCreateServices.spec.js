const UserRepository = require("../repositories/userRepository/userRepositoryinMemory")
const UserCreateService = require("../services/UserServices/UserCreateService")

describe("UserCreateService", () => {
    let userRepository = null
    let userCreateService = null

    it("user should be created", async () => {
        const user = {
            nome: "user test",
            email: "user@test.com",
            password: "123"
        }
        userRepository = new UserRepository()
        userCreateService = new UserCreateService(userRepository)

        const userCreated = await userCreateService.execute(user)

        expect(userCreated).toHaveProperty("id")
    })
})