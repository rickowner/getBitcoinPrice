import { CurrencyModel } from '../../../domain/models/currency'

export interface LoadCurrencyRepository {
  loadCurrency (currency: string): Promise<CurrencyModel>
}
