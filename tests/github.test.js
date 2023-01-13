const app = require('../app')
const request = require('supertest')

test('Should return user', async () => {
    await request(app).get('/api/v1/github?user=Kamal040102')
        .expect(200)
})

test('Should return user repos', async () => {
    await request(app).get('/api/v1/github/repos?user=Kamal040102')
        .expect(200)
})

test("Should return error if no user query given for repos route", async () => {
    await request(app).get('/api/v1/github/repos')
        .expect(400)
})

test("Should return error if no user query given for user account route", async () => {
    await request(app).get('/api/v1/github')
        .expect(400)
})

test("Should return error if user is not found for user account route", async () => {
    await request(app).get('/api/v1/github?user=kamal04010')
        .expect(404)
})

test("Should return error if user is not found for repos route", async () => {
    await request(app).get('/api/v1/github/repos?user=kamal04010')
        .expect(404)
})