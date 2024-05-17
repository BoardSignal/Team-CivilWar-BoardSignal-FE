import { useCallback, useEffect, useRef, useState } from 'react';

import { Client, IMessage } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import type { LastChatMessage } from '@/apis/chatRoomList';
import type { ChatMessage, MessageType } from '@/apis/chatRoomMessages';
import {
  CHAT_CONNECT_SOCKET_URL,
  CHAT_EXIT_SOCKET_URL,
  CHAT_SEND_SOCKET_URL,
  CHAT_SUBSCRIBE_SOCKET_URL,
} from '@/constants/apiRoutes';
import { STORAGE_KEY_ACCESS_TOKEN } from '@/constants/storageKeys';

export interface MessageRequest {
  content: string;
  type: MessageType;
}

/**
 *
 * @param isPublishExitMessage true인 경우 disconnect 될 때 서버에 exit 메시지를 보냅니다.
 *
 * exit 메시지는 읽음 처리를 위해 채팅방에서 나간 시간을 기록하는 용도로 사용됩니다.
 *
 */

interface SendChatMessageParams {
  rawMessages?: ChatMessage[];
  gatheringId: number;
  isPublishExitMessage?: boolean;
  rawLastChatMessage?: LastChatMessage;
  unreadChatCount?: number;
}

const useSendChatMessage = ({
  rawMessages = [],
  gatheringId,
  isPublishExitMessage = false,
  rawLastChatMessage,
  unreadChatCount = 0,
}: SendChatMessageParams) => {
  const client = useRef<Client | null>(null);
  const [lastMessage, setLastMessage] = useState(rawLastChatMessage);
  const [messages, setMessages] = useState<ChatMessage[]>(rawMessages);
  const [unreadMessagesCount, setUnreadMessagesCount] =
    useState(unreadChatCount);

  const accessToken = localStorage.getItem(STORAGE_KEY_ACCESS_TOKEN);

  const subscribe = () => {
    client.current?.subscribe(
      `${CHAT_SUBSCRIBE_SOCKET_URL}/${gatheringId}`,
      (message: IMessage) => {
        const newMessage = JSON.parse(message.body);

        setMessages(prevState => [newMessage, ...prevState]);
        setLastMessage(newMessage);
        setUnreadMessagesCount(prevState => prevState + 1);
      },
      {
        Authorization: `Bearer ${accessToken}`,
        RoomId: String(gatheringId),
      },
    );
  };

  const connect = () => {
    const socket = new SockJS(
      `${import.meta.env.VITE_BASE_URL}${CHAT_CONNECT_SOCKET_URL}`,
    );

    client.current = new Client({
      webSocketFactory: () => socket,
      onConnect: () => subscribe(),
      onStompError: frame => {
        throw new Error(`Broker reported error: ${frame.headers.message}`);
      },
    });

    client.current?.activate();
  };

  const disconnect = () => {
    if (!client.current) return;

    if (isPublishExitMessage) {
      client.current?.publish({
        destination: `${CHAT_EXIT_SOCKET_URL}/${gatheringId}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          RoomId: gatheringId.toString(),
        },
      });
    }

    setUnreadMessagesCount(0);
    client.current.deactivate();
  };

  const sendMessage = useCallback(({ content, type }: MessageRequest) => {
    if (content.length <= 0) {
      return;
    }

    client.current?.publish({
      destination: `${CHAT_SEND_SOCKET_URL}/${gatheringId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        RoomId: gatheringId.toString(),
      },
      body: JSON.stringify({
        content,
        type,
      }),
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const enterChatRoom = async () => {
      await connect();
    };

    enterChatRoom();

    return () => disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    messages,
    lastMessage,
    unreadMessagesCount,
    sendMessage,
    subscribe,
  };
};

export default useSendChatMessage;
