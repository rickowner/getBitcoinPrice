import { Controller, HttpRequest, HttpResponse } from 'presentation/protocols'

export class GetBitcoinPriceController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const retorno = await {}
    return retorno as any
  }
}
