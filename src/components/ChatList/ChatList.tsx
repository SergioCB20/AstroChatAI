import React from 'react';
import AstroIcon from "../../assets/AstroIcon.png";
import ChatPreview from "./ChatPreview";
import { Chat } from "../../types/types";
import { useAppContext } from '../../context/AppContext';

export const ChatList = ({chats, setCurrentChat}:{chats:Chat[]|null,setCurrentChat:React.Dispatch<React.SetStateAction<Chat|null>>}) => {

  const {user,setShowChat} = useAppContext();

  const handleClick = (chat:Chat) => {
    setCurrentChat(chat);
    /*vistear el ultimo mensaje ajeno*/
    for(let i=chat.messages.length-1;i>=0;i--){
      if(chat.messages[i].user.id !== user?.id){
        chat.messages[i].isRead = true;
        break;
      }
    }
    setShowChat(true);
  }

    return (
    <div className="w-full h-full">
      <div className="flex flex-row justify-center items-center lg:justify-normal lg:items-stretch w-full lg:gap-5 gap-2 h-[15%] border-b-2 lg:p-2 border-gray-300">
        <img
          src={AstroIcon}
          alt="logo de AstroChatAI"
          className="lg:h-full h-[50px] ms-[-25px] lg:m-0"
        />
        <h1 className="self-center font-bold lg:text-4xl ">Chats</h1>
      </div>
      <div className="max-h-[530px] overflow-y-scroll modern-scrollbar md:overflow-y-auto">
        { chats && chats.map((chat) => (
          <div onClick={()=>handleClick(chat)} className='cursor-pointer' key={chat.id}>
            <ChatPreview chat={chat}/>
          </div>
        ))}
      </div>
    </div>
  );
};
