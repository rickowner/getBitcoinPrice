import { InvalidParamErrors } from '../../presentation/erros/invalid-param-errors'
import { Validation } from '../../presentation/protocols/validation'

export class CurrencyValidationComposite implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly fieldToCompareName: string) { }

  validate (input: any): Error {
    if (input[this.fieldName] !== input[this.fieldToCompareName]) {
      return new InvalidParamErrors(this.fieldToCompareName)
    }
    return null as any
  }
}
