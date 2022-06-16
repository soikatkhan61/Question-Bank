//implement all the controller for user model here
const User = require('../../models/user/User')


exports.userGetController = async (req,res,next) =>{
    res.send("I am form User get Controller")
}