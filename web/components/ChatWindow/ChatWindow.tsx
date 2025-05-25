import { useState, useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import MessageBubble from '../MessageBubble/MessageBubble';

interface ChatWindowProps {
  receiverId: string;
}

type User = {
  id: number;
  firstName: string;
  lastName: string;
  status: 'ONLINE' | 'OFFLINE';
};

const ChatWindow: React.FC<ChatWindowProps> = ({ receiverId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/user/${receiverId}`,
          {
            withCredentials: true,
          },
        );
        setUser(res.data);
      } catch (err) {
        console.error('Nie udało się pobrać użytkownika:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [receiverId]);

  if (loading || !user) return <Spinner />;

  return (
    <div className="flex flex-col h-full rounded-lg ">
      <div className="flex items-center gap-4 p-4 ">
        <img
          src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${user.id}`}
          className="w-12 h-12 rounded-full object-cover mb-3"
        />
        <div className="flex flex-col">
          <span className="font-medium text-sm">
            {user.firstName} {user.lastName}
          </span>
          <span
            className={`text-xs ${
              user.status === 'ONLINE' ? 'text-green-600' : 'text-gray-400'
            }`}
          >
            {user.status.toLowerCase()}
          </span>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-2">
        <MessageBubble
          text="Hej, co tam?"
          isOwnMessage={false}
          timestamp="23:30"
        />
        <MessageBubble
          text="Siema! Wszystko gra, a u Ciebie?"
          isOwnMessage={true}
          timestamp="23:31"
        />
        <MessageBubble
          text="Też spoko. Pracuję nad appką."
          isOwnMessage={false}
          timestamp="23:31"
        />
      </div>
      <div className="p-4 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message here..."
          className="flex-1 px-6 py-4 rounded-full   bg-white text-sm placeholder-gray-400 focus:outline-none"
        />
        <button
          type="button"
          className="w-10 h-10 rounded-full bg-blue-100 text-white flex items-center justify-center hover:bg-blue-200 hover: cursor-pointer transition"
        >
          <FiSend className="text-lg text-blue-700" />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
