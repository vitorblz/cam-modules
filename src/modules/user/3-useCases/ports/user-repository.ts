import { IUser } from "../../4-entities/IUser";
import { User } from "../../4-entities/User";

export interface UserRepository{
    create: (user: User) => Promise<{id: number | string}>
    loadByLogin: (login: string) => Promise<IUser>
}