const {Router} = require("express")
const TaskController = require("../controllers/taskControllers")
const checkTaskExists = require("../middlewares/checkTaskExists")
const tasksRoutes = Router()
const taskController = new TaskController()

tasksRoutes.post("/tasks/:user_id", taskController.createTask )

tasksRoutes.get("/tasks", taskController.listTask)
tasksRoutes.get("/tasks/:id", checkTaskExists, taskController.listTaskById)

tasksRoutes.put("/tasks/:id" ,  checkTaskExists, taskController.updateTask )
tasksRoutes.patch("/tasks/status/:id",  checkTaskExists, taskController.updateTaskstatus)

tasksRoutes.delete("/tasks/:id",  checkTaskExists, taskController.deleteTask)


module.exports = tasksRoutes