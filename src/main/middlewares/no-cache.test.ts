import request from 'supertest'
import app from '../config/app'

describe('NoCache Middleware', () => {
  test('Should enable NoCache', async () => {
    app.get('/test_noCache', (req, res) => {
      res.send()
    })
    await request(app)
      .get('/test_noCache')
    expect('cache-control')
    expect('pragma')
    expect('expires')
    expect('surrogate-control')
  })
})
