import { UserRepository } from "../3-useCases/ports/user-repository";
import { User } from "../4-entities/User";

const users: User[] = [];

export class UserMemoryRepo implements UserRepository{
    async create (user: User){

        users.push(user);
        return  {id: 1};
        
    }
    async findAll () {
        return users;
    }

}