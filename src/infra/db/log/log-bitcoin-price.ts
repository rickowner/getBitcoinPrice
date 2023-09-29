import { LogErrorRepository } from '../../../data/db/log/log-error-repository'
import { BitcoinPriceHelper } from '../helpers/bitcoin-price'

export class LogBitcoinPrice implements LogErrorRepository {
  async logError (stack: string): Promise<void> {
    const errorPrices = await BitcoinPriceHelper.getPrices('errors')
    await errorPrices.callback('', '', stack)
  }
}
