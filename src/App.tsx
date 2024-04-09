import { useState,useEffect } from "react";
import { ChatList } from "./components/ChatList/ChatList";
import { ChatWindow } from "./components/ChatWindow/ChatWindow";
import {myAccount,mensajesRandom,Chats} from "./helpers/inicializarDatos";
import { Chat } from "./types/types";
import { useAppContext } from "./context/AppContext";
function App() {

  const [currentChat, setCurrentChat] = useState<Chat|null>(null);
  const {userMessages,setUser,setUserChats,setUserMessages} = useAppContext();

  useEffect(() => {
    setUser(myAccount);
    setUserChats(Chats);
    setUserMessages(mensajesRandom);
  }, []);

  return (
    <div className="flex flex-row relative text-black bg-white w-[80%] h-[95vh]  min-w-[300px] rounded-xl shadow-white">
      <section className="lg:w-1/2 xl:w-2/6 w-full h-full">
        {/*reemplazar messages por userChats y que se muestre en la preview el último mensaje del chat*/}
        <ChatList messages={userMessages} setCurrentChat={setCurrentChat} />
      </section>
      <section className="w-1/2 xl:w-4/6 h-full lg:block hidden border-s-2 border-gray-300">
        <ChatWindow currentChat={currentChat} />
      </section>
    </div>
  );
}

export default App;
