import { InvalidParamErrors } from '../../presentation/erros/invalid-param-errors'
import { Validation } from '../../presentation/protocols/validation'
import { CurrencyValidator } from '../protocols/currency-validator'

export class CurrencyValidationComposite implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly emailValidator: CurrencyValidator) { }

  validate (input: any): Error {
    const isValid = this.emailValidator.isValid(input[this.fieldName])
    if (!isValid) {
      return new InvalidParamErrors(this.fieldName)
    }
    return null as any
  }
}
