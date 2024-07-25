import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:[true,"Please Provide a Name"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Please Provide a Email"]
    },
    password:{
        type:String,
        required:[true,"Please Provide a Password"]
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    VerifyToken:String,
    VerifyTokenExpiry:Date,
})
const User = mongoose.models.users || mongoose.model("users",userSchema)

export default User