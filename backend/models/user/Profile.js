
const { Schema ,model} = require('mongoose')
//const User = require('./User')


const profileSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    name :{
        type: String,
        trim : true,
        maxlength : 50,
        required: true
    },
    title:{
        type:String,
        trim:true,
        maxlength:100
    },
    bio:{
        type:String,
        trim:true,
        maxlength:500,
        required:true
    },
    profilePic: String,
    school:{
        type: String,
        trim:true,
        maxlength: 255,
        required: true
    },
    college:{
        type: String,
        trim:true,
        maxlength: 255,
        required: true
    },
    posts:[
        {
            type:Schema.Types.ObjectId,
            ref:'Post'
        }
    ]
},{
    timestamps:true
})

const Profile = model('Profile',profileSchema)
module.exports = Profile