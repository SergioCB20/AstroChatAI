import Chat from "../models/chat.model.js"

export const createChat = (req,res) => {
    const newChat = new Chat(req.body);
    newChat.user = req.user.id;
    newChat.save()
   .then(chat => res.json(chat))
   .catch(err => res.status(400).json('Error:'+ err));
}

export const getChats = (req,res) => {

}