const mongoose = require('mongoose');

const {User} = require('../model/user');

const UserService ={
    createUser : (user) =>{
        const {name, password, email,initial, boardId} = user;
        User.find({email: {$in: email}})
            .then((user) =>{
                if (user) return console.log("user existed");
    
                const newUser= new User({
                    name, password, email,initial, boardId
                })
    
                newUser.save()
                    .then(console.log)
                
            })
            .catch(console.log)
    },

    deleteUser: (user) =>{

    }
}

module.exports = {
    UserService
}