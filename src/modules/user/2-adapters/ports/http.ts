export interface HttpResponse {
  statusCode: number
  body: any
}

export interface HttpRequest {
  accessToken?: string
  body?: any
}
