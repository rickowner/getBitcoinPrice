import { ok, serverErrors, unauthorized } from '../../helpers/http/http-helpers'
import { Authentication, Controller, HttpRequest, HttpResponse } from './get-bitcoin-price.protocols'

export class GetBitcoinPriceController implements Controller {
  constructor (private readonly authentication: Authentication) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { currency } = httpRequest.body
      const accessToken = await this.authentication.auth({ currency })
      if (!accessToken) {
        return unauthorized()
      }
      return ok({ currency })
    } catch (error) {
      return serverErrors(new Error())
    }
  }
}
