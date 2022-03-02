
import { IUser } from "../4-entities/IUser";
import { UserRepository } from "./ports/user-repository";

export class FindAllUsers{

    constructor(private readonly userRepository: UserRepository){}

    async exec(): Promise<IUser[] | null>{
        const users = await this.userRepository.findAll();
        
        if(!users) return null;

        return users;
    }

}