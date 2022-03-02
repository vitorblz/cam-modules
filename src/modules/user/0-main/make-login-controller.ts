import env from "../../../main/config/env";
import { makeLoginValidation } from "../../../shared/validators/1-infra/email-validator-adapter";
import { Bcrypt } from "../1-frameworks/bcrypt";
import { UserMongoRepo } from "../1-frameworks/user-mongo-repo";
import { HttpAuthenticateUserController } from "../2-adapters/http-authentication-controller";

import { JwtAdapter } from "../2-adapters/jwt-adpter";
import { AuthenticateUser } from "../3-useCases/authenticate-user";


export function makeLoginController(){
    //dependencies
    const repo = new  UserMongoRepo();
    const bcrypt  = new Bcrypt(12);
    const jwtAdapter = new JwtAdapter(env.jwtSecret);
    
    //useCase
    const authenticateUser  =  new  AuthenticateUser(repo,bcrypt,jwtAdapter)
    const validator = makeLoginValidation();
    
    //Controller
    return new HttpAuthenticateUserController(validator, authenticateUser) 
}