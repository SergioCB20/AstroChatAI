import { Chat } from "../../types/types";
import { useAppContext } from "../../context/AppContext";
import MessageBox from "./MessageBox";
import { useState } from "react";
interface PersonalChatProps {
  chat: Chat;
}

export default function PersonalChat({ chat }: PersonalChatProps) {
  const { members } = chat;
  const [inputText, setInputText] = useState("");
  const { user,setShowChat } = useAppContext();


  const SendMessage = () => {
    if (inputText.trim().length > 0 && user) {
      chat.messages.push({
        id: `message-${inputText.length}`,
        user: user,
        createdAt: new Date(),
        updatedAt: new Date(),
        isRead: false,
        deletedAt: null,
        isDeleted: false,
        target: chat.id,
        text: inputText.trim(),
      });
      setInputText("");
    }
  };

  return (
    <div className="h-full">
      {members !== null && (
        <div className="w-full h-full">
          <div className="w-full flex flex-row lg:gap-8 gap-4 ps-5 h-[12%] border-b-2 border-gray-300">
            <div className="self-center w-5 text-xs cursor-pointer font-bold lg:hidden block" onClick={()=>setShowChat(false)}>Volver</div>
            <div className="w-[55px] h-[55px] ms-2 border-black border-2 rounded-full self-center">
              <img
                src={members[0].avatar}
                alt={`avatar de ${members[0].name}`}
                className="p-2"
              />
            </div>
            <p className="self-center font-bold">{members[0].name}</p>
          </div>
          <div className="w-full relative h-[88%] flex flex-col">
            <div className="h-[90%] max-h-[90%] w-full flex flex-col px-3 py-7 overflow-y-scroll modern-scrollbar">
              {chat.messages.map((message) => (
                <MessageBox message={message} />
              ))}
            </div>
            <div className="absolute bottom-0 w-full h-[10%]  border-t-2 border-gray-300 flex justify-center items-center">
              <input
                type="text"
                className="w-[60%] h-[85%] px-2"
                placeholder="Escribe algo..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    SendMessage();
                  }
                }}
              />

              <button
                className="w-[20%] h-[85%] p-2 px-5"
                onClick={() => SendMessage()}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
