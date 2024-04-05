

class UserCreateService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }
    async execute({nome, email, password}) {
        const userCreated = await this.userRepository.createUser({nome, email, password})
        return userCreated
    }
}
module.exports = UserCreateService