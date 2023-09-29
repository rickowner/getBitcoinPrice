import { LogBitcoinPrice } from '../../../infra/db/log/log-bitcoin-price'
import { LogControllerDecorator } from '../../../main/decorators/log-controller-decorator'
import { Controller } from '../../../presentation/protocols'

export const makeLogControllerDecoratorFactory = (controller: Controller): Controller => {
  const logMongoRepository = new LogBitcoinPrice()
  return new LogControllerDecorator(controller, logMongoRepository)
}
