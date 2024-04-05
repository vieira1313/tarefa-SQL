const {Router} = require("express")
const tasksRoutes = require("./task.routes")
const userRoutes = require("./users.routes")

const routes = Router()

routes.use("/", tasksRoutes)
routes.use("/", userRoutes)

module.exports = routes