

class UserUpdateService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }
    async execute({id, nome, email}) {
        const user = await this.userRepository.updateUser({id, nome, email})
        return user
    }
}
module.exports = UserUpdateService