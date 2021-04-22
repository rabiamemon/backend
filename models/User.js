
const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    date: {
        type:Date,
        default: Date.now
    }
});

module.exports=mongoose.model('users', UserSchema)

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        min: 6,
        max: 255
    }, 
    email: {
        type: String, 
        required: true,
        max: 255
    },
    password: {
        type: String, 
        required: true,
        min: 6, 
        max: 1024
    },
    date: {
        type: Date, 
        default: Date.now()
    }

});

module.exports = mongoose.model('User', userSchema);

