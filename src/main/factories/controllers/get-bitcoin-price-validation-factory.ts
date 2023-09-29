import { CurrencyValidatorAdapter } from '../../../infra/validators/currency-validator-adapter'
import { Validation } from '../../../presentation/protocols/validation'
import { CurrencyValidationComposite } from '../../../validation/validators/currency-validation-composite'
import { RequiredFieldValidationComposite } from '../../../validation/validators/required-field-validation-composite'
import { ValidationComposite } from '../../../validation/validators/validation-composite'

export const makeGetBitcoinPriceValidationFactory = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['currency']) {
    validations.push(new RequiredFieldValidationComposite(field))
  }
  validations.push(new CurrencyValidationComposite('currency', new CurrencyValidatorAdapter()))

  return new ValidationComposite(validations)
}
