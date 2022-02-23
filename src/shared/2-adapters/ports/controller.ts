import { HttpRequest, HttpResponse } from "./http";

export interface Controller {
     handler: (req: HttpRequest) => Promise<HttpResponse>;
}