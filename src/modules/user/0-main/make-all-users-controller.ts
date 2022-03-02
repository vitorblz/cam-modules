
import { UserMongoRepo } from "../1-frameworks/user-mongo-repo";
import { HttpAllUsersController } from "../2-adapters/http-all-users-controller";
import { FindAllUsers } from "../3-useCases/find-all-users";


export function makeAllUsersController(){
    //dependencies
    const repo = new  UserMongoRepo();
    
    //useCase
    const findAllUsers = new FindAllUsers(repo);
    
    //Controller
    return new HttpAllUsersController(findAllUsers) 
}