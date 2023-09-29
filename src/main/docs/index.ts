import { currencyALLSchema, currencySchema } from '../../main/docs/schemas/currency-schema'
import { getBitcoinPrice, getBitcoinPriceAll } from './paths/getBitcoinPrice'

export default {
  openapi: '3.0.0',
  info: {
    title: 'getBitcoinPrice',
    description: 'Api de teste para realizar consulta de preços do Bitcoin',
    version: '1.0.0'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'getBitcoinPrice'
  }],
  paths: {
    '/getBitcoinPrice': getBitcoinPriceAll,
    '/getBitcoinPrice/{code}': getBitcoinPrice
  },
  schemas: {
    currencyAll: currencyALLSchema,
    currency: currencySchema
  }
}
