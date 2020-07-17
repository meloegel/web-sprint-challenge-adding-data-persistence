const express = require('express')

const router = express.Router()

const Resources = require('./resources-model')

router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'error' })
        })
})

router.post('/', (req, res) => {
    const resourceData = req.body
    Resources.addResource(resourceData)
        .then(resources => {
            res.status(201).json(resources)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'error' })
        })
})

module.exports = router;