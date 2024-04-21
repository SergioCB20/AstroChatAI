import { Chat } from "../../types/types";
import { GetHourMinutes } from "../../helpers/formatTime";
import { useState, useEffect } from "react";
import Noviewed from "../../assets/no-viewed.png";
import Viewed from "../../assets/viewed.png";
import { useAppContext } from "../../context/AppContext";
export default function ChatPreview({ chat }: { chat: Chat }) {
  const {user} = useAppContext();
  const realMembers = chat.members.filter(member => member.id != user?.id);
  const [lastMessage,setLastMessage] = useState(chat.messages[chat.messages.length - 1]);
  useEffect(()=>{
    setLastMessage(chat.messages[chat.messages.length - 1]);
    console.log(chat.messages.length);
  },[chat.messages.length])
  const hora = GetHourMinutes(lastMessage.createdAt);

  return (
    <div className="flex flex-row justify-around w-full h-[12%] min-h-[80px] border-b-2 border-gray-300">
      <div className="lg:w-[55px] lg:h-[55px] w-[35px] h-[35px] ms-2 border-black border-2 rounded-full self-center">
        {chat.members.length <=2?(
          <img
          src={realMembers[0].avatar}
          alt={`avatar de ${realMembers[0].name}`}
          className="lg:p-2 p-1"
        />
        ):(
          <img
          src={chat.photo}
          alt={`avatar de ${chat.name}`}
          className="lg:p-2 p-1"
        />
        )}
      </div>
      <div className="w-[85%] p-3  h-full">
        <div className="w-full flex flex-row justify-between">
          {chat.members.length <=2?(<p className="font-bold">{realMembers[0].name}</p>):<p className="font-bold">{chat.name}</p>}
          <p className="text-xs mt-1">{hora}</p>
        </div>
        <div className="flex flex-row gap-2">
          {lastMessage.user.id != user?.id && (
            lastMessage.isRead? (
              <img src={Viewed} className="w-[20px] mt-0.5" />
            ) : (
              <img src={Noviewed} className="w-[20px] mt-0.5" />
            )
          )}
          <p className="text-sm overflow-x-hidden text-nowrap text-ellipsis">{lastMessage.text}</p>
        </div>
      </div>
    </div>
  );
}
