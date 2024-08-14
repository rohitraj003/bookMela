import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
})

const users = mongoose.model('users',userSchema)
export default users