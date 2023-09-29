import { badRequest, ok, serverErrors } from '../../helpers/http/http-helpers'
import { Controller, HttpRequest, HttpResponse } from './get-bitcoin-price.protocols'

import { Validation } from '../../../presentation/protocols/validation'

export class GetBitcoinPriceController implements Controller {
  constructor (private readonly validation: Validation) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { currency } = await httpRequest.body
      return ok({ currency })
    } catch (error) {
      return serverErrors(new Error())
    }
  }
}
