import React from 'react';
import AstroIcon from "../../assets/AstroIcon.png";
import ChatPreview from "./ChatPreview";
import { Message, Chat } from "../../types/types";
import { useAppContext } from '../../context/AppContext';
import { buscarChat } from '../../helpers/buscadores';

export const ChatList = ({messages, setCurrentChat}:{messages:Message[]|null,setCurrentChat:React.Dispatch<React.SetStateAction<Chat|null>>}) => {
  
    const {userChats} = useAppContext();

  const handleCurrentChat = (mensaje:Message) => {
    let chat;
    if(userChats != null)
    chat = buscarChat(mensaje.target,userChats);
    if(chat != null)
    setCurrentChat(chat);
  }

    return (
    <div className="w-full h-full">
      <div className="flex flex-row justify-center items-center lg:justify-normal lg:items-stretch w-full lg:gap-5 gap-2 h-[15%] border-b-2 lg:p-2 border-gray-300">
        <img
          src={AstroIcon}
          alt="logo de AstroChatAI"
          className="lg:h-full h-[50px]"
        />
        <h1 className="just self-center font-bold lg:text-4xl ">Chats</h1>
      </div>
      <div className="max-h-[570px] overflow-y-scroll modern-scrollbar md:overflow-y-auto">
        { messages && messages.map((msg) => (
          <div onClick={()=>handleCurrentChat(msg)} className='cursor-pointer' key={msg.id}>
            <ChatPreview message={msg}/>
          </div>
        ))}
      </div>
    </div>
  );
};
