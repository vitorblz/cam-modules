
import { IUser } from "../4-entities/IUser";
import { User } from "../4-entities/User";
import { Encrypter } from "./ports/Encrypter";
import { Hasher } from "./ports/hasher";
import { Authentication } from "./ports/IAuthenticationDTO";
import { UserRepository } from "./ports/user-repository";

export class AuthenticateUser{

    constructor(private readonly userRepository: UserRepository, 
        private readonly hasher: Hasher, 
        private readonly encrypter: Encrypter){}

    async exec(input: Authentication.Input): Promise<Authentication.Output | null>{
        const user = await this.userRepository.loadByLogin(input.login);
        
        if(!user) return null;
    
        const {password, ...rest} = user;

        const isValid = await this.hasher.compare(input.password, password);
        if(!isValid) return null;
        const accessToken = await this.encrypter.encrypt(rest)
        return {accessToken};
    }

}