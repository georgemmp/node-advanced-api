const request = require('supertest')

const server = require('../../server')
const { User } = require('../../model')

describe('Authentication', () => {
  it('should be able to authenticate with valid credentials', async () => {
    const user = await User.create({
      name: 'george',
      email: 'george@mail.com',
      password: '123456'
    })

    const response = await request(server)
      .post('/api/users/login')
      .send({
        email: user.email,
        password: '123456'
      })
    expect(response.status).toBe(200)
  })
})
