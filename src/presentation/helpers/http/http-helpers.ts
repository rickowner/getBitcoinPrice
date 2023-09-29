import { ServerErrors, UnauthorizedErrors } from '../../erros'

import { HttpResponse } from '../../protocols'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedErrors()
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const serverErrors = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerErrors(error.stack)
})
