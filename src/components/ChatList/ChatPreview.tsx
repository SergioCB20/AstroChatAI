import { Message } from "../../types/types";
import { GetHourMinutes } from "../../helpers/formatTime";
import Noviewed from "../../assets/no-viewed.png";
import Viewed from "../../assets/viewed.png";
export default function ChatPreview({ message }: { message: Message }) {
  //console.log(message);
  const hora = GetHourMinutes(message.createdAt);
  return (
    <div className="flex flex-row justify-around w-full h-[12%] min-h-[80px] border-b-2 border-gray-300">
      <div className="w-[55px] h-[55px] ms-2 border-black border-2 rounded-full self-center">
        <img
          src={message.user.avatar}
          alt={`avatar de ${message.user.name}`}
          className="p-2"
        />
      </div>
      <div className="w-[85%] p-3  h-full">
        <div className="w-full flex flex-row justify-between">
          <p className="font-bold">{message.user.name}</p>
          <p className="text-xs mt-1">{hora}</p>
        </div>
        <div className="flex flex-row gap-2">
          {message.isRead ? (
            <img src={Viewed} className="w-[20px] mt-0.5" />
          ) : (
            <img src={Noviewed} className="w-[20px] mt-0.5" />
          )}
          <p className="text-sm overflow-x-hidden text-nowrap text-ellipsis">{message.text}</p>
        </div>
      </div>
    </div>
  );
}
