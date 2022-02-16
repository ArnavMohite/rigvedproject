const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {type: String},
    name: {type: String} ,
   email: {type: String} , 
    mobile: {type: String} ,
   address: {type: String} ,
    services: {type: String} 
})
var UserModel = mongoose.model('UserModel',userSchema)
module.exports = UserModel;