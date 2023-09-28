export class UnauthorizedErrors extends Error {
  constructor () {
    super('Unauthorized')
    this.name = 'UnauthorizedErros'
  }
}
