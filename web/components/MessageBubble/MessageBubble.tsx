import React from 'react';
import clsx from 'clsx';

interface MessageBubbleProps {
  text: string;
  isOwnMessage: boolean;
  timestamp?: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  text,
  isOwnMessage,
  timestamp,
}) => {
  return (
    <div
      className={clsx(
        'flex mb-2',
        isOwnMessage ? 'justify-end' : 'justify-start',
      )}
    >
      <div
        className={clsx(
          'max-w-xs md:max-w-md px-6 py-4 rounded-lg text-sm whitespace-pre-line',
          isOwnMessage
            ? 'bg-blue-800 text-white rounded-br-none'
            : 'bg-white text-gray-800 rounded-bl-none',
        )}
      >
        {text}
        {timestamp && (
          <div
            className={clsx(
              'text-[10px]  text-gray-400 mt-1',
              isOwnMessage ? 'text-right' : 'text-left',
            )}
          >
            {timestamp}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
