const mongoose = require('mongoose') 

const UserSchema= new mongoose.Schema({
    name: {type : String, required : true},
    password: {type : String, required : true},
    email: {type : [String], required : true},
    initial: String,
    boardId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Board'
    }
})

const User = mongoose.model("User",UserSchema);
module.exports = {
    User,UserSchema
}