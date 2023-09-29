import { InvalidParamErrors } from '../../presentation/erros/invalid-param-errors'
import { CurrencyValidationComposite } from './currency-validation-composite'

const makeSutFactory = (): CurrencyValidationComposite => {
  return new CurrencyValidationComposite('fieldName', 'fieldToCompare')
}

describe('RequiredField Validation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = makeSutFactory()
    const error = sut.validate({ field: 'any_name', fieldToCompare: 'wrong_value' })
    expect(error).toEqual(new InvalidParamErrors('fieldToCompare'))
  })
  test('Should not return if validation success', () => {
    const sut = makeSutFactory()
    const error = sut.validate({ field: 'any_name', fieldToCompare: 'any_name' })
    expect(error).toEqual(new InvalidParamErrors('fieldToCompare'))
  })
})
