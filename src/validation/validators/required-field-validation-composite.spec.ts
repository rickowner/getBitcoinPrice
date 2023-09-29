import { MissingParamErrors } from '../../presentation/erros/missing-param-errors'
import { RequiredFieldValidationComposite } from './required-field-validation-composite'

const makeSutFactory = (): RequiredFieldValidationComposite => {
  return new RequiredFieldValidationComposite('field')
}

describe('RequiredField Validation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = makeSutFactory()
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamErrors('field'))
  })
  test('Should not return if validation success', () => {
    const sut = makeSutFactory()
    const error = sut.validate({ field: 'any_name' })
    expect(error).toBeFalsy()
  })
})
