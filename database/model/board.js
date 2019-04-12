const mongoose = require('mongoose') 

const BoardSchema= new mongoose.Schema({
    name: {type : String, required : true},
    list: {type: [String]},
    userID: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    }, 
})

const Board = mongoose.model("Board",BoardSchema);
module.exports = {
    Board,BoardSchema
}