import { UserMemoryRepo } from "../1-frameworks/UserMemoryRepo";
import { HelloController } from "../2-adapters/hello-controller";
import { CreateUser } from "../3-useCases/create-user";
import { FindAllUser } from "../3-useCases/find-all-user";

const repo = new  UserMemoryRepo();

export function makeHelloController(){
    const createUser = new CreateUser(repo);
    const findAllUsers = new FindAllUser(repo);
    return new HelloController(createUser, findAllUsers)
}