import Message from '../models/message.model.js';

export const createMessage = (req,res)=>{
    const newMessage = new Message(req.body);
    newMessage.save()
   .then(data=>{
    res.json(data);
    })
    .catch(err=>{
        res.status(500).send({message: err.message});
    })
}

export const getMessage = (req,res) => {
    const messageFound = Message.findById(req.params.id);
    messageFound.then(data=>{
        res.json(data);
    }).catch(err=>{
        res.status(500).send({message: err.message});
    });
}

export const updateMessage = (req,res) => {
    const messageUpdated = Message.findByIdAndUpdate(req.params.id, req.body);
    messageUpdated.then(data=>{
        res.json(data);
    }).catch(err=>{
        res.status(500).send({message: err.message});
    });
}