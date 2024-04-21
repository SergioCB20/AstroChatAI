import {userId,Chat} from "../types/types";
import { usuariosRandom } from "./inicializarDatos";

export const buscarChat = (chat_id:number, userChats:Chat[])=>{
   if(userChats){
    const chat = userChats.find((chat)=>{
        return chat.id === chat_id;
    });
    return chat;
   }
}

export const buscarUsuario = (user_id:userId)=>{
    if(usuariosRandom){
        const user = usuariosRandom.find((user)=>{
            return user.id === user_id;
        });
        return user;
    }
}



