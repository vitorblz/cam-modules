
import { IUser } from "../4-entities/IUser";
import { Encrypter } from "./ports/Encrypter";
import { Hasher } from "./ports/hasher";
import { Authentication } from "./ports/IAuthenticationDTO";
import { UserRepository } from "./ports/user-repository";

export class AuthenticateUser{

    constructor(private readonly userRepository: UserRepository, 
        private readonly hasher: Hasher, 
        private readonly encrypter: Encrypter,){}

    async exec(input: Authentication.Input): Promise<Authentication.Output>{
        const {password, ...rest} = await this.userRepository.loadByLogin(userDTO.login);
        const isValid = await this.hasher.compare(userDTO.password, password);
        if(!isValid) return null;
        const accessToken = await this.encrypter.encrypt(rest)
        return {accessToken};
    }

}