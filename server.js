const express = require('express');

const server = express();

const ProjectsRouter = require('./projects/projects-router')
const ResourcesRouter = require('./resources/resources-router')
const TasksRouter = require('./tasks/tasks-router')

server.use(express.json());

server.use('/api/projects', ProjectsRouter)
server.use('/api/resources', ResourcesRouter)
server.use('/api/tasks', TasksRouter)

server.get('/', (req, res) => {
    res.status(200).json({ message: 'it works' })
})

module.exports = server;