//user schema

const {Schema , model} = require('mongoose')


const userSchema = new Schema({
    username :{
        type: String,
        trim : true,
        maxlength : 30,
        required: true
    },
    email:{
        type:String,
        trim: true,
        required: true
    },
    password:{
        required:true,
        type:String
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    verification_id:{
        type:Number,
        default:-1
    },
    profile:{
        type:Schema.Types.ObjectId,
        ref: 'Profile'
    },
    profilePics:{
        type: String,
        default:'/uploads/question-bank.jpg'
    }

},{
    timestamps:true
})

const User = model('User',userSchema)

module.exports = User