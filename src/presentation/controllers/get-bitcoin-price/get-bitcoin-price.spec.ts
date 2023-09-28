import { HttpRequest } from 'presentation/protocols'
import { GetBitcoinPriceController } from './get-bitcoin-price'

const makeFakeRequestFactory = (): HttpRequest => ({
//   body: {
//     code: 'USD'
//   }
})

interface SutTypes {
  sut: GetBitcoinPriceController
}

const makeSutFactory = (): SutTypes => {
  const sut = new GetBitcoinPriceController()
  return {
    sut
  }
}

describe('GetBitcoinPrice Controller', () => {
  test('Should returns 200 GetBitcoinPrice if valid currency are provided', async () => {
    const { sut } = makeSutFactory()
    const httpResponse = await sut.handle(makeFakeRequestFactory())
    expect(httpResponse).toEqual(makeFakeRequestFactory())
  })
})
