import { Bcrypt } from "../1-frameworks/bcrypt";
import { UserMongoRepo } from "../1-frameworks/user-mongo-repo";

import { HttpCreateUserController } from "../2-adapters/http-create-user-controller";
import { CreateUser } from "../3-useCases/create-user";


export function makeCreateUserController(){
    const repo = new  UserMongoRepo();

    const bcrypt  = new Bcrypt(12);

    const createUser = new CreateUser(repo, bcrypt);
    return new HttpCreateUserController(createUser)
}