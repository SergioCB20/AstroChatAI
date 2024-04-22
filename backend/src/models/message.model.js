import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

    text: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt:{
        type: Date,
        default: null
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    isRead: {
        type: Boolean,
        default: false
    },
    target:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
        required: true
    }

},{
    collection: 'Message'
});

export default mongoose.model("Message", messageSchema);