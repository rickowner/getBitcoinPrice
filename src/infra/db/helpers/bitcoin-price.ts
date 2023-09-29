import fetch from 'cross-fetch'

export const request = require('request')

export const BitcoinPriceHelper = {
  client: null as typeof request,
  uri: null as unknown as string,

  async connect (uri?: string): Promise<void> {
    this.uri = uri
    this.client = await fetch(`${this.uri}`)
    try {
      return await this.client
    } catch (error) {
      console.log(error)
    }
  },
  async getPrices (name: string): Promise<any> {
    if (this.client) {
      return await this.connect(this.uri)
    }
    return await request(this.options, this.callback)
  },
  map: (collection: any): any => {
    const { _currency } = collection
    return Object.assign({}, { currency: _currency })
  }
}
