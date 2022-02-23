import { HttpRequest, HttpResponse } from "./ports/http";
import { FindAllUser } from "../3-useCases/find-all-user";
import { UserMemoryRepo } from "../1-frameworks/UserMemoryRepo";
import { CreateUser } from "../3-useCases/create-user";
import { Controller } from "../../../shared/2-adapters/ports/controller";
import { ok } from "../../../shared/2-adapters/helpers/http-helper";

const repo = new  UserMemoryRepo();

export class HelloController implements Controller{

    constructor(private readonly createUser: CreateUser, 
        private readonly findAllUsers: FindAllUser){}

    async handler(req: HttpRequest): Promise<HttpResponse> {
      

        await this.createUser.exec({login: 'teste', password: 'teste'});

        const users  = await this.findAllUsers.exec();

        const body = {message: 'Hello', users};
        return ok(body);
    }
}
