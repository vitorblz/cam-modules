import { HttpRequest, HttpResponse } from "./ports/http";

import { Controller } from "../../../shared/2-adapters/ports/controller";
import { badRequest, ok, serverError } from "../../../shared/2-adapters/helpers/http-helper";
import { AuthenticateUser } from "../3-useCases/authenticate-user";
import { Validator } from "../../../shared/validators/1-infra/email-validator-adapter";

export class HttpAuthenticateUserController implements Controller{

    constructor( private readonly validation: Validator, 
        private readonly authenticateUser: AuthenticateUser){}

    async handler(req: HttpRequest): Promise<HttpResponse> {
        try
        {
            const error = this.validation.validate(req.body)

            console.log(error);
            if (error instanceof Error) {
              return badRequest(error)
            }
            const {login, password}  = req.body;

            const token = await this.authenticateUser.exec({login, password});
    
            return ok(token);
        }
        catch(error: Error | any){
            console.log(error);
            return serverError(error)
        }
    }
}
