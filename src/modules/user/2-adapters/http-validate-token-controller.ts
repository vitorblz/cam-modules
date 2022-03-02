import { HttpRequest, HttpResponse } from "./ports/http";

import { Controller } from "../../../shared/2-adapters/ports/controller";
import { badRequest, forbidden, ok, serverError } from "../../../shared/2-adapters/helpers/http-helper";
import { ValidateToken } from "../3-useCases/validate-token";

export class HttpValidateTokenController implements Controller{

    constructor(private readonly validateToken: ValidateToken){}

    async handler(req: HttpRequest): Promise<HttpResponse> {
        try
        {
            if(!req.accessToken) return badRequest(new Error('Token not found'))
            const result = await this.validateToken.exec(req.accessToken);
    
            return ok(result);
        }
        catch(error: Error | any){
            if(error.name==='JsonWebTokenError')
                return forbidden(error);
            return serverError(error)
        }
    }
}
