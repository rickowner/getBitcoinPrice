import { ok, serverErrors, unauthorized } from '../../helpers/http/http-helpers'
import { Authentication, AuthenticationModel, HttpRequest } from './get-bitcoin-price.protocols'

import { GetBitcoinPriceController } from './get-bitcoin-price'

const makeFakeRequestFactory = (): HttpRequest => ({
  body: {
    currency: 'USD'
  }
})

const makeAuthenticationFactory = (): Authentication => {
  class AuthenticationStub implements Authentication {
    async auth (authentication: AuthenticationModel): Promise<string> {
      return new Promise(resolve => resolve('any_token'))
    }
  }
  return new AuthenticationStub()
}
interface SutTypes {
  sut: GetBitcoinPriceController
  authenticationStub: Authentication
}

const makeSutFactory = (): SutTypes => {
  const authenticationStub = makeAuthenticationFactory()
  const sut = new GetBitcoinPriceController(authenticationStub)
  return {
    sut,
    authenticationStub
  }
}

describe('GetBitcoinPrice Controller', () => {
  test('Should call Authentication with correct currency', async () => {
    const { sut, authenticationStub } = makeSutFactory()
    const authSpy = jest.spyOn(authenticationStub, 'auth')
    await sut.handle(makeFakeRequestFactory())
    expect(authSpy).toHaveBeenCalledWith({ currency: 'USD' })
  })

  test('Should return 401 if invalid credentials are provided', async () => {
    const { sut, authenticationStub } = makeSutFactory()
    jest.spyOn(authenticationStub, 'auth').mockReturnValueOnce(
      new Promise(resolve => resolve(null as any)))
    const httpResponse = await sut.handle(makeFakeRequestFactory())
    expect(httpResponse).toEqual(unauthorized())
  })

  test('Should return 500 if Authentication throws', async () => {
    const { sut, authenticationStub } = makeSutFactory()
    // jest.spyOn(authenticationStub, 'auth').mockImplementationOnce(() => { throw new Error() })
    jest.spyOn(authenticationStub, 'auth').mockReturnValueOnce(
      new Promise((resolve, reject) => reject(new Error()))
    )
    const httpResponse = await sut.handle(makeFakeRequestFactory())
    expect(httpResponse).toEqual(serverErrors(new Error()))
  })

  test('Should returns 200 GetBitcoinPrice if valid currency are provided', async () => {
    const { sut } = makeSutFactory()
    const httpResponse = await sut.handle(makeFakeRequestFactory())
    expect(httpResponse).toEqual(ok({
      currency: 'USD'
    }))
  })
})
