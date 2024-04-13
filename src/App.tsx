import { useState, useEffect } from "react";
import { ChatList } from "./components/ChatList/ChatList";
import { ChatWindow } from "./components/ChatWindow/ChatWindow";
import { myAccount, mensajesRandom, Chats } from "./helpers/inicializarDatos";
import { Chat } from "./types/types";
import { useAppContext } from "./context/AppContext";
function App() {
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);
  const { userChats, setUser, setUserChats, setUserMessages,showChat } = useAppContext();

  useEffect(() => {
    setUser(myAccount);
    setUserChats(Chats);
    setUserMessages(mensajesRandom);
  }, []);

  return (
    <div className="w-full h-full grid place-items-center bg-blue-900">
      <div className="flex flex-row relative text-black bg-white w-[80%] h-[95vh]  min-w-[300px] rounded-xl shadow-white">
        <section className={`lg:w-1/2 xl:w-2/6 lg:block ${showChat?"hidden":"block"}  w-full h-full`}>
          {/*reemplazar messages por userChats y que se muestre en la preview el último mensaje del chat*/}
          <ChatList chats={userChats} setCurrentChat={setCurrentChat}/>
        </section>
        <section className={`w-full lg:w-1/2 xl:w-4/6 h-full lg:block ${showChat?"block":"hidden"} border-s-2 border-gray-300`}>
          <ChatWindow currentChat={currentChat} />
        </section>
      </div>
    </div>
  );
}

export default App;
