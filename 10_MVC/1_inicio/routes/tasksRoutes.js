const express = require('express')

const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove/:id', TaskController.removeTask)
router.get('/edit/:id', TaskController.updateTask)
router.post('/edit/:id', TaskController.updateTaskPost)
router.post('/updatestatus/:id', TaskController.toggleTaskStatus)
router.get('/', TaskController.showTasks)

module.exports = router
