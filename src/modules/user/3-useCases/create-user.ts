
import { User } from "../4-entities/User";
import { Hasher } from "./ports/hasher";
import { NewUser } from "./ports/new-user-dto";
import { UserRepository } from "./ports/user-repository";

export class CreateUser{

    constructor(private readonly userRepository: UserRepository, private readonly hasher: Hasher){}

    async exec(userDTO: NewUser){
        const password = await this.hasher.hash(userDTO.password);
        const user = User.create({...userDTO, password})
        return this.userRepository.create(user);
    }

}