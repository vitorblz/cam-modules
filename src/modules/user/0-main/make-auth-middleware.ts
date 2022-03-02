import env from "../../../main/config/env";
import { Bcrypt } from "../1-frameworks/bcrypt";
import { UserMongoRepo } from "../1-frameworks/user-mongo-repo";
import { HttpAuthenticateUserController } from "../2-adapters/http-authentication-controller";
import { HttpValidateTokenController } from "../2-adapters/http-validate-token-controller";

import { JwtAdapter } from "../2-adapters/jwt-adpter";
import { AuthenticateUser } from "../3-useCases/authenticate-user";
import { ValidateToken } from "../3-useCases/validate-token";


export function makeAuthMiddleware(){
    //dependencies
    const jwtAdapter = new JwtAdapter(env.jwtSecret);
    
    //useCase
    const validateToken  =  new  ValidateToken(jwtAdapter)
    
    //Controller
    return new HttpValidateTokenController(validateToken); 
}