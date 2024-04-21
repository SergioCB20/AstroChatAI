import { Chat } from '../../types/types'
import GroupChat from './GroupChat';
import PersonalChat from './PersonalChat';

export const ChatWindow = ({currentChat}:{currentChat:Chat|null})=>{
    return (
        <div className="w-full h-full">
            {currentChat === null?(
                <div className="w-full h-full flex justify-center items-center text-white bg-slate-400">
                    <h1 className="text-4xl font-bold">
                        Welcome to AstroChatAI!
                    </h1>
                </div>
            ):(
                <div className='h-full'>
                    {currentChat !=null && currentChat.members.length > 2?(
                    <GroupChat chat={currentChat}/>
                    ):(
                    <PersonalChat chat={currentChat}/>
                    )}
                </div>
            )}
        </div>
    );
}
/* Recuerda que tiene que buscar al o los usuarios que pertenecen al mismo chat que tú*/