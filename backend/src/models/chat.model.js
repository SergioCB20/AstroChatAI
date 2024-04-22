import mongoose, { model } from 'mongoose';

const chatSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    photo:{
        type:String,
        required:false,
        trim:true
    },
    messages:{
        type:Array.mongoose.Schema.Types.ObjectId,
        ref:"Message",
        required:true
    },
    members:{
        type:Array.mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

},{
    collection: 'Chat'
})

export default mongoose.model('Chat',chatSchema);