import { KeyboardEvent } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';

import Icon from '@/components/Icon';
import type { MessageRequest } from '@/hooks/useSendChatMessage';

interface ChatMessageFormValue {
  message: string;
}

interface ChatTextareaProps {
  onSend: ({ content, type }: MessageRequest) => void;
}

const chatMessageFormOptions = {
  mode: 'all' as const,
  defaultValues: { message: '' },
  resolver: yupResolver(
    object({
      message: string().required(),
    }),
  ),
};

const ChatTextarea = ({ onSend }: ChatTextareaProps) => {
  const { register, handleSubmit, watch, reset } =
    useForm<ChatMessageFormValue>(chatMessageFormOptions);

  const onSubmitMessage = handleSubmit((data: ChatMessageFormValue) => {
    onSend({
      content: data.message,
      type: 'CHAT',
    });
    reset();
  });

  const submitMessageOnEnterWithoutShift = (
    e: KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmitMessage();
    }
  };

  return (
    <form
      className='flex items-center gap-2 px-4 py-2'
      onSubmit={onSubmitMessage}
    >
      <textarea
        placeholder='메시지 보내기'
        rows={1}
        maxLength={200}
        {...register('message')}
        onKeyDown={submitMessageOnEnterWithoutShift}
        className='scroll-none grow resize-none appearance-none rounded-lg border border-gray-accent7 bg-transparent p-4 pr-12 text-gray-accent1 outline-none focus:ring-2 focus:ring-gray-accent2'
      />
      <div className='absolute right-16 text-xs text-gray-accent4'>{`${watch('message').length}/200`}</div>
      <button>
        <Icon id='send-plane-fill' size={28} className='text-gray-accent4' />
      </button>
    </form>
  );
};

export default ChatTextarea;
