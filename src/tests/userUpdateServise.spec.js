const UserRepositoryInMemory = require("../repositories/userRepository/userRepositoryinMemory")
const UserCreateService = require("../services/UserServices/UserCreateService")
const UserUpdateService = require("../services/UserServices/UserUpdateService")

describe("UserUpdateService", () => {
    let userRepository = null
    let userCreateService = null
    let userUpdateService = null

    it("shoud be possible to update an user", async () => {
        const user = {
            nome: "user test",
            email: "user@test.com",
            password: "123"
        }
        userRepository = new UserRepositoryInMemory()
       userCreateService = new UserCreateService (userRepository)
        userUpdateService = new UserUpdateService(userRepository)

        const userCreated = await userCreateService.execute(user)

        userCreated.nome = "User update",
        userCreated.email = "updated@mail.com"
        
        const updatedUser = await userUpdateService.execute(userCreated)

        expect(updatedUser).toHaveProperty("email", "updated@mail.com")
    })
})