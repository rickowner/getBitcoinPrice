import { Validation } from '../../presentation/protocols/validation'

export class ValidationComposite implements Validation {
  private error: Error

  constructor (private readonly validations: Validation[]) { }

  validate (input: any): Error {
    for (const validation of this.validations) {
      this.error = validation.validate(input)
      if (this.error) {
        return this.error
      }
    }
    return this.error
  }
}
