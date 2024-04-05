const knex = require("../database/knex")
 
const UserRepository = require("../repositories/userRepository/UserRepository")
const UserListService = require("../services/UserServices/UserListService")
const UserCreateService = require("../services/userServices/UserCreateService")
const UserListByIdService = require("../services/UserServices/UserListByIdService")
const UserUpdateService = require("../services/UserServices/UserUpdateService")
const UserdeleteService = require("../services/UserServices/UserDeleteService")

const userRepository =  new UserRepository()

const userCreateService = new UserCreateService(userRepository)
const userListService = new UserListService(userRepository)
const userListByIdService = new UserListByIdService(userRepository)
const userUpdateService = new UserUpdateService(userRepository)
const userDeleteService = new UserdeleteService(userRepository)

class UserControler {
    async createUser(req, res) {
        const { nome, email, password } = req.body
           
        await userCreateService.execute({nome, email, password})

         return res.status(201).json("Usuário cadastrado com sucesso")
    }
    async listUsers(req, res) {
      const users = await userListService.execute()
         return res.status(200).json(users)
    }
    async listUserById(req, res) {
        const {user_id} = req.params
       const user = await userListByIdService.execute({user_id})
       
      return res.status(200).json(user)
    }
    async updateUser(req, res) {
        const {user_id } = req.params
        const { nome, email } = req.body

        await userUpdateService.execute({user_id, nome, email})

       return  res.status(200).json("usuario atualizado com sucesso!")
    }
    async updateUserAdmin(req, res) {
        const { user_id } = req.params

        await knex("users").where({id:user_id}).update({isAdmin: true})
       return  res.status(200).json("usuário agora e um adiministrador!")
    }
    async deleteUser(req, res) {
        const {user_id } = req.params
        await userDeleteService.execute({user_id})
        return res.status(200).json("registro deletado com sucesso!")
    }

}
module.exports = UserControler