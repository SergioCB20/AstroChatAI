import { useAppContext } from '../../context/AppContext';
import { Message } from '../../types/types';
import Noviewed from "../../assets/no-viewed.png";
import Viewed from "../../assets/viewed.png";
import { GetHourMinutes } from '../../helpers/formatTime';

export default function MessageBox({ message }: { message: Message }) {
  const { user } = useAppContext();

  return (
    <div className={`w-fit max-w-[40%] relative flex gap-2 h-fit p-5 mb-5 border-2 border-black ${message.user.id === user?.id ? 'self-end' : 'self-start'}`}>
      <p className='w-fit text-sm pe-12'>{message.text}</p>
      <div>
        <span className='flex gap-1 text-xs absolute bottom-1 right-2'>
          {GetHourMinutes(message.createdAt)}
          {message.isRead ? (
            <img src={Viewed} className="w-[20px]" />
          ) : (
            <img src={Noviewed} className="w-[20px] " />
          )}
        </span>
      </div>
    </div>
  );
}
