import { MissingParamErrors } from './../../presentation/erros/missing-param-errors'
import { Validation } from './../../presentation/protocols/validation'

export class RequiredFieldValidationComposite implements Validation {
  constructor (private readonly fieldName: string) {}

  validate (input: any): Error {
    if (!input[this.fieldName]) {
      return new MissingParamErrors(this.fieldName)
    }
    return null as any
  }
}
