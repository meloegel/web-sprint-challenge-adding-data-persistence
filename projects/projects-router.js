const express = require('express')

const router = express.Router()

const Projects = require('./projects-model')

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'error' })
        })
})

router.post('/', (req, res) => {
    const projectData = req.body
    Projects.addProject(projectData)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'error' })
        })
})

module.exports = router;