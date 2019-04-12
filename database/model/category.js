const mongoose = require('mongoose') 

const CategorySchema= new mongoose.Schema({
    name : {type: String, required: true},
    taskId: {
        type:[mongoose.Schema.Types.ObjectId],
        ref:'task'
    }

})

const Category = mongoose.model("Category",CategorySchema);
module.exports = {
    Category,UserSchema
}