const mongoose = require('mongoose') ;
const {UserService} = require('./services/userServices');

mongoose.connect('mongodb://localhost:27017/todolist', {useNewUrlParser:true})
    .then(console.log("connected to todolist"))
    .catch(console.log)



const user_test= {
    name: "Doan Trong Nhan",
    password: "17041998",
    email: ["nhandoantrong@gmail.com"],
    initial: "NT",
    boardId: [],
}


UserService.createUser(user_test);

