// servers send responses and recieve requests (from clients/front-end)

const express = require('express')
const plants = require('./data.js')
const app = express()
const port = 3000

// our first ENDPOINT / ROUTE
// node will listen for requests at the path: '/'
app.get('/plants', (req, res) => {

    res.json(plants)
})

app.get('/plants/:id', (req, res) => {
    // when it recieves a request at this path, it will respond with 'hello world!'
    const id = Number(req.params.id);

    const plant = plants.find((singlePlant) => singlePlant.id === id);

    res.json(plant)
})

module.exports = app;