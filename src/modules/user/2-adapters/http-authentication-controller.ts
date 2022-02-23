import { HttpRequest, HttpResponse } from "./ports/http";

import { CreateUser } from "../3-useCases/create-user";
import { Controller } from "../../../shared/2-adapters/ports/controller";
import { ok } from "../../../shared/2-adapters/helpers/http-helper";
import { AuthenticateUser } from "../3-useCases/authenticate-user";

export class HttpAuthenticateUserController implements Controller{

    constructor(private readonly authenticateUser: AuthenticateUser){}

    async handler(req: HttpRequest): Promise<HttpResponse> {

        const {login, password}  = req.body;

        const id = await this.authenticateUser.exec({login, password});

        const body = {message: 'Hello', id};
        return ok(body);
    }
}
