const express = require('express')

const router = express.Router()

const Tasks = require('./tasks-model')

router.get('/', (req, res) => {
    Tasks.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'error' })
        })
})

router.post('/', (req, res) => {
    const taskData = req.body
    Tasks.addTask(taskData)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'error' })
        })
})

module.exports = router;