import  mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    login: {
        type: String,
        index: true,
        unique: true
    }
})

const UsersModel = mongoose.model('Users', schema);    

export default UsersModel;