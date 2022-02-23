import  mongoose from 'mongoose';

const UsersModel = mongoose.model('Users', new mongoose.Schema({
        name: String,
        password: String,
        email: String,
        login: String
    }));    

export default UsersModel;