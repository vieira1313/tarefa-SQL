class UserListByIdService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }
    async execute({id}) {
        const user = await this.userRepository.listUserById({ id})
        return user
    }
}
module.exports = UserListByIdService