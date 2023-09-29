import validator from 'validator'
import { CurrencyValidator } from '../../validation/protocols/currency-validator'

export class CurrencyValidatorAdapter implements CurrencyValidator {
  isValid (currency: string): boolean {
    return validator.isCurrency(currency)
  }
}
