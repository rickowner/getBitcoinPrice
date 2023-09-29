import { badRequest, ok } from '../../helpers/http/http-helpers'

import { MissingParamErrors } from '../../../presentation/erros/missing-param-errors'
import { Validation } from '../../../presentation/protocols/validation'
import { GetBitcoinPriceController } from './get-bitcoin-price'
import { HttpRequest } from './get-bitcoin-price.protocols'

const makeFakeRequestFactory = (): HttpRequest => ({
  body: {
    currency: 'USD'
  }
})

const makeValidationFactory = (): Validation => {
  class ValidationStub implements Validation {
    validate (input: any): Error {
      return null as any
    }
  }
  return new ValidationStub()
}
interface SutTypes {
  sut: GetBitcoinPriceController
  validationStub: Validation
}

const makeSutFactory = (): SutTypes => {
//   const authenticationStub = makeAuthenticationFactory()
  const validationStub = makeValidationFactory()
  const sut = new GetBitcoinPriceController(validationStub)
  return {
    sut,
    validationStub
  }
}

describe('GetBitcoinPrice Controller', () => {
  test('Should call Validation with correct value', async () => {
    const { sut, validationStub } = makeSutFactory()
    const validateSpy = jest.spyOn(validationStub, 'validate')
    const httpRequest = makeFakeRequestFactory()
    await sut.handle(httpRequest)
    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
  })

  test('Should returns 200 GetBitcoinPrice if valid currency are provided', async () => {
    const { sut } = makeSutFactory()
    const httpResponse = await sut.handle(makeFakeRequestFactory())
    expect(httpResponse).toEqual(ok({
      currency: 'USD'
    }))
  })
  test('Should return 400 if Validation returns an error', async () => {
    const { sut, validationStub } = makeSutFactory()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new MissingParamErrors('any_field'))
    const httpResponse = await sut.handle(makeFakeRequestFactory())
    expect(httpResponse).toEqual(badRequest(new MissingParamErrors('any_field')))
  })
})
