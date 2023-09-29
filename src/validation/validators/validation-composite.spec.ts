import { MissingParamErrors } from '../../presentation/erros/missing-param-errors'
import { Validation } from '../../presentation/protocols/validation'
import { ValidationComposite } from './validation-composite'

const makeValidationFactory = (): Validation => {
  class ValidationStub implements Validation {
    validate (input: any): Error {
      return null as any
    }
  }
  return new ValidationStub()
}

interface SubTypes {
  sut: ValidationComposite
  validationStubs: Validation[]
}
const makeSutFactory = (): SubTypes => {
  const validationStubs = [makeValidationFactory(), makeValidationFactory()]
  const sut = new ValidationComposite(validationStubs)
  return {
    sut,
    validationStubs
  }
}

describe('Validation Composite', () => {
  test('Should return an error if any validation fails', () => {
    const { sut, validationStubs } = makeSutFactory()
    for (const validationStub of validationStubs) {
      jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new MissingParamErrors('field'))
    }
    // jest.spyOn(validationStubs[0], 'validate').mockReturnValueOnce(new MissingParamErrors('field'))
    const error = sut.validate({ field: 'any_value' })
    expect(error).toEqual(new MissingParamErrors('field'))
  })
  test('Should return the first error if more then more one validation fails', () => {
    const { sut, validationStubs } = makeSutFactory()
    jest.spyOn(validationStubs[0], 'validate').mockReturnValueOnce(new Error())
    jest.spyOn(validationStubs[1], 'validate').mockReturnValueOnce(new MissingParamErrors('field'))
    const error = sut.validate({ field: 'any_value' })
    expect(error).toEqual(new Error())
  })
  test('Should not return if validation succeeds', () => {
    const { sut } = makeSutFactory()
    const error = sut.validate({ field: 'any_value' })
    expect(error).toBeFalsy()
  })
})
