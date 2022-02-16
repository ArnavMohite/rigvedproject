const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('../DB/UserModel');
//const UserModel = require('../DB/UserModel');
const route = express.Router();
exports.read_user = function(req,res){
    console.log("inside read user"); 
    UserModel.find({},function (err,job){
        if(err){
            res.send(err);
        }
        res.send(UserModel);    
    })
}
exports.add_user = function(req,res) {}



/*route.post('/',async(req,res)=>{
    const {id,name,email,mobile,address,services} = req.body;
    let user = {};
    user.id = id;
    user.name = name;
    user.email = email;
    user.mobile = mobile;
    user.address = address;
    user.services = services;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);

});

module.exports = route;*/