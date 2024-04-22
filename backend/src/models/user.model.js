import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:false,
        trim:true
    },
    avatar:{
        type:String,
        required:true,
        trim:true
    },
    messages:{
        type:Array,
        required:true,
        default:[]
    },
    isOnline:{
        type:Boolean,
        required:true,
        default:false
    },
    chats:{
        type:Array,
        required:true,
        default:[]
    }

},{
    collection:'User'
})

export default mongoose.model('User',userSchema);