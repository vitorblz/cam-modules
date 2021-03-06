
import { ServerError } from "../errors"
import { HttpResponse } from "../ports/http"

export const badRequest = (error: Error): HttpResponse => {
  return ({
    statusCode: 400,
    body: error
  })
}

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (data: any): HttpResponse => ({
  statusCode: 204,
  body: data
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack || '')
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error
})