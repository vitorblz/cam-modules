import { MongoHelper } from "../../../shared/1-infra/mongo-helper";
import { UserRepository } from "../3-useCases/ports/user-repository";
import { IUser } from "../4-entities/IUser";
import { User } from "../4-entities/User";
import UsersModel from "./model/Users";

export class UserMongoRepo implements UserRepository {

    async create (user: User){
        const createdUser  = await UsersModel.create(user);
        return {id: createdUser._id.toString()}
    }

    async loadByLogin (login: string): Promise<IUser> {
        const user = await UsersModel.findOne({ login }).exec();
        console.log(user);
        return user;
    }

}