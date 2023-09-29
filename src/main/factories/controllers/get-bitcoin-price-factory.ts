import { GetBitcoinPriceController } from '../../../presentation/controllers/get-bitcoin-price/get-bitcoin-price'
import { Controller } from '../../../presentation/protocols'
import { makeLogControllerDecoratorFactory } from '../decorators/log-controller-decorator-factory'
import { makeGetBitcoinPriceValidationFactory } from './get-bitcoin-price-validation-factory'

export const makeGetBitcoinPriceControllerFactory = (): Controller => {
  const controller = new GetBitcoinPriceController(makeGetBitcoinPriceValidationFactory())
  return makeLogControllerDecoratorFactory(controller)
}
