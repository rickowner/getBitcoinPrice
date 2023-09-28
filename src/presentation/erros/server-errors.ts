export class ServerErrors extends Error {
  constructor (stack?: string) {
    super('Internal Server Errors')
    this.name = 'ServerErros'
    this.stack = stack
  }
}
