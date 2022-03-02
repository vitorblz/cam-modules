import { HttpRequest, HttpResponse } from "./ports/http";

import { Controller } from "../../../shared/2-adapters/ports/controller";
import { ok, serverError } from "../../../shared/2-adapters/helpers/http-helper";
import { AuthenticateUser } from "../3-useCases/authenticate-user";
import { FindAllUsers } from "../3-useCases/find-all-users";

export class HttpAllUsersController implements Controller{

    constructor(private readonly findAllUsers: FindAllUsers){}

    async handler(req: HttpRequest): Promise<HttpResponse> {
        try
        {
            const users = await this.findAllUsers.exec();
    
            return ok(users);
        }
        catch(error: Error | any){
            return serverError(error)
        }
    }
}
