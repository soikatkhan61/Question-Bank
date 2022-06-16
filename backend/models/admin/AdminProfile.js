
const { Schema, model } = require('mongoose')

const AdminProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'AdminModel',
        required: true
    },
    adminType: {
        type: String,
        enum: ['admin', 'moderator', 'editor'],
        default: 'editor'
    },
    name: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true
    },
    title: {
        type: String,
        trim: true,
        maxlength: 100
    },
    bio: {
        type: String,
        trim: true,
        maxlength: 500,
        required: true
    },
    profilePic: String,
    school: {
        type: String,
        trim: true,
        maxlength: 255,
        required: true
    },
    college: {
        type: String,
        trim: true,
        maxlength: 255,
        required: true
    }
}, {
    timestamps: true
})

const AdminProfile = model('AdminProfile', AdminProfileSchema)
module.exports = AdminProfile