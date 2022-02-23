import { IUser } from "./IUser";


export class User{
    private name: string | undefined;
    private email: string | undefined;
    
    constructor(private readonly login: string, private readonly password: string){}

    private setName(name: string){
        this.name = name;
    }
    private setEmail(email: string){
        this.email = email;
    }

    static create(user: IUser): User{
        return new User(user.login, user.password);
    }
}