import {Schema, model} from 'mongoose'

const userSchema=new Schema({
    firstName:{
        type: String,
        required:[true,"firstName is required"]
    },
    lastName:{
        type: String
    },
    email:{
        type: String,
        required:[true, "email is required"],
        unique: [true,"email already exists"]
    },
    password:{
        type: String,
        required:[true,"password is required"]
    },
    role:{
        type:String,
        enum:["USER","AUTHOR","ADMIN"],
        required:[true,"invalid role"]
    },
    profileImageUrl:{
        type: String
    },
    isUserActive:{
        type: Boolean,
        default: true
    }
},{
    timestamps:true,
    versionKey: false,
    strict:"throw"
})


//create model
export const userModel = model('user', userSchema);