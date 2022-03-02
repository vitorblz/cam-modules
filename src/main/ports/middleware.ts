import { HttpResponse } from "../../shared/2-adapters/ports/http";


export interface Middleware<T = any> {
  handle: (httpRequest: T) => Promise<HttpResponse>
}
