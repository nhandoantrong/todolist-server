const mongoose = require('mongoose') 

const TaskSchema= new mongoose.Schema({
    name: {type: String,required},   
    description: String,
    userId: {type: [mongoose.Schema.Types.ObjectId],
    ref: "User"}
    
})

const Task = mongoose.model("Task",TaskSchema);
module.exports = {
    Task,TaskSchema
}