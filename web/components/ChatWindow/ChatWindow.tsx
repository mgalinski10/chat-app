import { useState, useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import MessageBubble from '../MessageBubble/MessageBubble';
import { useSocket } from '@/contexts/SocketContext';
import ChatWindowHeader from '../ChatWindowHeader/ChatWindowHeader';

interface ChatWindowProps {
  receiverId: string;
}

type User = {
  id: number;
  firstName: string;
  lastName: string;
  status: 'ONLINE' | 'OFFLINE';
};

type Message = {
  id: number;
  text: string;
  senderId: number;
  receiverId: number;
  createdAt: string;
};
// TODO: Check this code
const ChatWindow: React.FC<ChatWindowProps> = ({ receiverId }) => {
  const socket = useSocket();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (message: Message) => {
      setMessages((prev) => [...prev, message]);
    };

    socket.on('newMessage', handleNewMessage);

    return () => {
      socket.off('newMessage', handleNewMessage);
    };
  }, [socket]);

  const fetchMessages = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/messages/${receiverId}`,
        { withCredentials: true },
      );
      setMessages(res.data);
    } catch (err) {
      console.error('Nie udało się pobrać wiadomości:', err);
    }
  };
  const fetchUser = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/user/${receiverId}`, {
        withCredentials: true,
      });
      setUser(res.data);
    } catch (err) {
      console.error('Nie udało się pobrać użytkownika:', err);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!messageText.trim()) return;

    try {
      await axios.post(
        'http://localhost:5000/messages',
        {
          text: messageText,
          receiverId: Number(receiverId),
        },
        { withCredentials: true },
      );

      setMessageText('');
    } catch (err) {
      console.error('Nie udało się wysłać wiadomości:', err);
    } finally {
      fetchMessages();
    }
  };

  useEffect(() => {
    fetchMessages();
    fetchUser();
  }, [receiverId]);

  if (loading || !user) return <Spinner />;

  return (
    <div className="flex flex-col h-full rounded-lg ">
      <ChatWindowHeader user={user} />
      {/* TODO: HAX with styles, fix it to avoid scrren stretch in y axios */}
      <div className="flex-1 p-4 overflow-y-auto space-y-2 max-h-[calc(100vh-250px)]">
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            text={msg.text}
            isOwnMessage={msg.senderId !== user.id}
            timestamp={new Date(msg.createdAt).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          />
        ))}
      </div>
      <div className="p-4 flex items-center gap-2">
        <input
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          type="text"
          placeholder="Type a message here..."
          className="flex-1 px-6 py-4 rounded-full bg-white text-sm placeholder-gray-400 focus:outline-none"
        />
        <button
          onClick={sendMessage}
          type="button"
          className="w-10 h-10 rounded-full bg-blue-100 text-white flex items-center justify-center hover:bg-blue-200 hover:cursor-pointer transition"
        >
          <FiSend className="text-lg text-blue-700" />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
