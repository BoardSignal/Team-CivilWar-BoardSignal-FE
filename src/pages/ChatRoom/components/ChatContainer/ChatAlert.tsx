import { ChatMessage } from '@/apis/chatRoomMessages';
import Alert from '@/components/Alert';

interface ChatAlertProps {
  message: ChatMessage;
}

const ChatAlert = ({ message }: ChatAlertProps) => {
  const { nickname, content, type } = message;
  const variant = {
    FIX: 'primary',
    UNFIX: 'danger',
    PARTICIPANT: 'normal',
    EXIT: 'normal',
    CHAT: 'normal',
    KICK: 'danger',
  } as const;

  return (
    <Alert variant={variant[type]} className='my-1.5'>
      {type !== 'FIX' && type !== 'KICK' && nickname}
      {content}
    </Alert>
  );
};

export default ChatAlert;
