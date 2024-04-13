// ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { User, Chat, Message } from '../types/types';

interface AppContextType {
  user: User|null;
  setUser:React.Dispatch<React.SetStateAction<User|null>>;
  userChats: Chat[]|null;
  setUserChats:React.Dispatch<React.SetStateAction<Chat[]|null>>;
  userMessages: Message[]|null;
  setUserMessages:React.Dispatch<React.SetStateAction<Message[]|null>>;
  showChat: boolean;
  setShowChat: React.Dispatch<React.SetStateAction<boolean>>
}

interface Props {
    children: React.ReactNode;
  }

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider: React.FC<Props> = ({children}:{children:React.ReactNode} ) => {
  const [user, setUser] = useState<User | null>(null);
  const [userChats, setUserChats] = useState<Chat[] | null>(null);
  const [userMessages, setUserMessages] = useState<Message[] | null>(null);
  const [showChat, setShowChat] = useState(false);
  return (
    <AppContext.Provider value={{ user, setUser,userChats,setUserChats,userMessages,setUserMessages,showChat,setShowChat }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe ser usado dentro de un AppProvider');
  }
  return context;
};

export { AppProvider, useAppContext };
