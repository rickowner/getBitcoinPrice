import { Controller, HttpRequest, HttpResponse } from 'presentation/protocols'

export class GetBitcoinPriceController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const retorno = {}
    return await retorno as any
  }
}
