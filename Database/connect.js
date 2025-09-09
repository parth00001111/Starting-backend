// const express = require('express');
// const jwt = require('josnwebtoken');
// const mongoose = require('mongoose');
// const jwtPassword = "123456";

// mongoose.connect()

const mongoose = require('mongoose');
const { email } = require('zod');
mongoose.connect('mongodb+srv://kanhamahajan73:XyLujLsIHVJZ3RaA@cluster0.lmz1a4r.mongodb.net/userappnew');

const Cat = mongoose.model('Users', { name: String, email: String, password: String });
app.post('.signup', async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const existingUser = await User.findOne({email: username});
    // CRUD => Create, Update, Delete, Reload 
    if(existingUser) {
        return res.status(400).send("username already exists");
    }
});

const user = new Cat({ 
    name: 'Parth Mahajan', 
    email: 'shreya@gmail.com', 
    password: "123456" 

});
// kitty.save().then(() => console.log('meow'));
user.save();
res.json({
    "msg": "user created successfully"
});
