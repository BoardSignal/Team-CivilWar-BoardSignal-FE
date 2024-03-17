import { ChangeEvent, FormEvent, useState } from 'react';

import Icon from '@/components/Icon';
import TextInput from '@/components/TextInput';

interface ChatInputProps {
  onSend: (content: string) => void;
}

const ChatInput = ({ onSend }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmitMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message) {
      return;
    }

    onSend(message);
    setMessage('');
  };

  return (
    <form
      className='flex items-center gap-2 px-4 py-2'
      onSubmit={handleSubmitMessage}
    >
      <TextInput
        placeholder='메시지 보내기'
        value={message}
        onChange={handleChangeMessage}
      />
      <button>
        <Icon id='send-plane-fill' size={28} className='text-gray-accent4' />
      </button>
    </form>
  );
};

export default ChatInput;
