const knex = require("../../database/knex")
class UserRepository{
    async createUser({nome, email, password}) {
        const isAdmin = false
        const userId = await knex("users").insert({
            nome, email, password, isAdmin
        })
        return {id: userId}
    }

    async listUsers() {
        const users = await knex("users")
        return users  
    }

    async listUserById({user_id}) {
        const user = await knex("users").where({id: user_id})
        return user  
    }

    async updateUser({user_id, nome, email}) {
        const user = await knex("users").where({id: user_id})

        user.nome = nome ?? user.nome
        user.email = email ?? user.email

     await knex("users").where({id: user_id}).update({nome: user.nome, email: user.email})

        return user
    }
    
}
module.exports = UserRepository