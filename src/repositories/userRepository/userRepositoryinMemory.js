
class UserRepositoryInMemory{
    users = []
    async createUser({nome, email, password}) {
       const user = {
        id: Math.floor(Math.random() * 1000) + 1,
        nome,
        email,
        password
       }
       this.users.push(user)
       return user
    }

    async listUsers() {
        return this.users  
    }

    async listUserById({user_id}) {
        const user = this.users.find(user => user.user_id === user_id)
        return user  
    }

    async updateUser({user_id, nome, email}) {
        const user = this.listUserById({id: user_id})

        user.nome = nome ?? user.nome
        user.email = email ?? user.email
        return user
    }

    async deleteUser({user_id}) {
        const index = this.users.findIndex(user => user.user_id === user_id)
       return this.users.splice(index, 1)
    }
    
}
module.exports = UserRepositoryInMemory