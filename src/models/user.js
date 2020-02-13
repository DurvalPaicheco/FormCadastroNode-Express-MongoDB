const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique:true,
        require: true,
        lowerase: true, 
    },
    password:{
        type: String,
        require: true,
        select: false,
    },
    createdAT:{
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;