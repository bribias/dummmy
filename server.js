// servers send responses and recieve requests (from clients/front-end)

const express = require('express')
const app = express()
const port = 3000

// our first ENDPOINT / ROUTE
// node will listen for requests at the path: '/'
app.get('/plants', (req, res) => {
    const plants = {
        fern = {
            id: 1,
            species: 'Kimberly Queen Fern',
            image: 'fern.jpeg',
            description: 'Graceful and timeless. This soft fern is low-maintenance and easy to care for.',
        },

        rubber = {
            id: 2,
            species: 'Rubber Tree',
            image: 'rubber.jpeg',
            description: 'Rubber trees can measure over 100 feet tall in their native Asia, but regular pruning will keep the ornamental variety in check.',
        },

        pothos = {
            id: 3,
            species: 'Devils Ivy',
            image: 'pothos.jpg',
            description: 'This trailing vine has earned the nickname devils ivy for its ability to withstand nearly pitch-black conditions as well as under- and over-watering. ',
        },

        aglaonema = {
            id: 4,
            species: 'Chinese Evergreen',
            image: 'aglaonema.jpeg',
            description: 'Aglaonema can withstand excess H2O, and it comes in a spectrum of colors, including green, pink, white, and red.',
        },

        money = {
            id: 5,
            species: 'Money Tree',
            image: 'money.jpeg',
            description: 'Grows best in a shady spot (or winter windowsill) with weekly watering.',
        },

        calathea = {
            id: 6,
            species: 'Prayer Plant',
            image: 'calathea.jpeg',
            description: 'Prayer plants produce foliage pretty enough to outshine a bouquet, and you do not need a botany degree to maintain one.',
        }
    };

    res.json(plants)
})

app.get('/other-route', (req, res) => {
    // when it recieves a request at this path, it will respond with 'hello world!'

    res.send('Other Route!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})