const app = require('../app.js')
const supertest = require('supertest')
const request = supertest(app)

it('gets the test endpoint', async done => {
    const myData = [
        {
            id: 2,
            name: 'rubber'
        },
        {
            id: 3,
            name: 'pothos'
        }
    ]
    const response = await request.get('/test')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(myData)
    done()
})