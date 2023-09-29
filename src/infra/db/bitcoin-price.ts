import { LoadCurrencyRepository } from '../../data/db/currency/load-currency'
import { CurrencyModel } from '../../domain/models/currency'
import { BitcoinPriceHelper } from './helpers/bitcoin-price'

export class BitcoinPriceRepository implements LoadCurrencyRepository {
  async loadCurrency (currency: string): Promise<CurrencyModel> {
    const currencyCollection = await BitcoinPriceHelper.getPrices('')
    const currencyPrice = await currencyCollection
    return currencyPrice
  }
}
