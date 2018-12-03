import mongoose from '../config/dbConfig';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    company: {
        type: String,
    },
    location: {
        type: String,
    },
});

const userDataModel = mongoose.model('User', userSchema);

export default userDataModel;
