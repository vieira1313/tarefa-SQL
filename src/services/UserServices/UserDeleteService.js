

class UserdeleteService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }
    async execute({id}) {
        return await this.userRepository.deleteUser({id})
       
    }
}
module.exports = UserdeleteService