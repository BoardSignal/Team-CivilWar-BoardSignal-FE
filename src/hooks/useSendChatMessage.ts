import { useCallback, useEffect, useRef, useState } from 'react';

import { CompatClient, IMessage, Stomp } from '@stomp/stompjs';
import { useQueryClient } from '@tanstack/react-query';
import SockJS from 'sockjs-client';

import { type ChatMessage, type MessageType } from '@/apis/chatRoomMessages';
import {
  CHAT_CONNECT_SOCKET_URL,
  CHAT_EXIT_SOCKET_URL,
  CHAT_SEND_SOCKET_URL,
  CHAT_SUBSCRIBE_SOCKET_URL,
} from '@/constants/apiRoutes';
import { CHATS_QUERY_KEY } from '@/constants/queryKey';
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

const useSendChatMessage = (
  gatheringId: number,
  isPublishExitMessage = false,
  rawLastChatMessage: ChatMessage | undefined = undefined,
) => {
  const client = useRef<CompatClient | null>(null);
  const [lastChatMessage, setLastChatMessage] = useState<
    ChatMessage | undefined
  >(rawLastChatMessage);

  const accessToken = localStorage.getItem(STORAGE_KEY_ACCESS_TOKEN);
  const queryClient = useQueryClient();

  const connect = () => {
    const socket = new SockJS(
      `${import.meta.env.VITE_BASE_URL}${CHAT_CONNECT_SOCKET_URL}`,
    );
    client.current = Stomp.over(socket);

    client.current.connect(
      {
        Authorization: `Bearer ${accessToken}`,
        RoomId: gatheringId,
      },
      () => {
        client.current?.subscribe(
          `${CHAT_SUBSCRIBE_SOCKET_URL}/${gatheringId}`,
          (message: IMessage) => {
            queryClient.invalidateQueries({
              queryKey: [CHATS_QUERY_KEY, gatheringId],
            });

            setLastChatMessage(JSON.parse(message.body));
          },
          {
            Authorization: `Bearer ${accessToken}`,
            RoomId: String(gatheringId),
          },
        );
      },
    );

    client.current.onStompError = frame => {
      throw new Error(`Broker reported error: ${frame.headers.message}`);
    };

    client.current.activate();
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

      queryClient.invalidateQueries({
        queryKey: [CHATS_QUERY_KEY, gatheringId],
      });
    }

    client.current.disconnect({
      Authorization: `Bearer ${accessToken}`,
      RoomId: gatheringId.toString(),
    });
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

  return { lastChatMessage, sendMessage };
};

export default useSendChatMessage;
