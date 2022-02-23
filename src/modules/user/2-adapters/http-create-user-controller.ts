import { HttpRequest, HttpResponse } from "./ports/http";

import { CreateUser } from "../3-useCases/create-user";
import { Controller } from "../../../shared/2-adapters/ports/controller";
import { ok } from "../../../shared/2-adapters/helpers/http-helper";

export class HttpCreateUserController implements Controller{

    constructor(private readonly createUser: CreateUser){}

    async handler(req: HttpRequest): Promise<HttpResponse> {

        const {login, password}  = req.body

        const id = await this.createUser.exec({login, password});

        const body = {message: 'Hello', id};
        return ok(body);
    }
}
