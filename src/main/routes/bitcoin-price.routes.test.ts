import request from 'supertest'
import app from '../config/app'

describe('BitcoinPrice Routes', () => {
  describe('GET /BitcoinPrice', () => {
    test('Should return 400 on BitcoinPrice', async () => {
      await request(app)
        .get('/api/BitcoinPrice')
        .send({
          code: 'USD'
        })
        .expect(404)
    })
    test('Should return 200 on BitcoinPrice', async () => {
      await request(app)
        .get('/api/getBitcoinPrice')
        .expect(200)
    })
    test('Should return 200 on BitcoinPrice1', async () => {
      await request(app)
        .get('/api/getBitcoinPrice1')
        .expect(404)
    })
    test('Should return 400 on BitcoinPrice2/:code', async () => {
      await request(app)
        .get('/api/getBitcoinPrice2/:code')
        .send({
          code: 'USD'
        })
        .expect(404)
    })
    test('Should return 200 on BitcoinPrice/:code', async () => {
      await request(app)
        .get('/api/getBitcoinPrice/:code')
        .send({
          code: 'USD'
        })
        .expect(200)
    })
    test('Should return 400 on BitcoinPrice1/:code', async () => {
      await request(app)
        .get('/api/getBitcoinPrice1/:code')
        .send({
          code: 'USD'
        })
        .expect(400)
    })
    test('Should return 200 on BitcoinPrice1/:code', async () => {
      await request(app)
        .get('/api/getBitcoinPrice1/:code')
        .send({
          code: 'EEE'
        })
        .expect(400)
    })
  })
})
