'use client';
import ChatWindow from '@/components/ChatWindow/ChatWindow';
import { useParams } from 'next/navigation';

const ChatPage = () => {
  const params = useParams();
  const userId = params?.id as string;

  return <ChatWindow receiverId={userId} />;
};

export default ChatPage;
