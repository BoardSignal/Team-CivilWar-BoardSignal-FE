import { useCallback, useEffect, useRef } from 'react';

import { CompatClient, Stomp } from '@stomp/stompjs';
import { useQueryClient } from '@tanstack/react-query';
import SockJS from 'sockjs-client';

import {
  CHAT_CONNECT_SOCKET_URL,
  CHAT_SEND_SOCKET_URL,
  CHAT_SUBSCRIBE_SOCKET_URL,
} from '@/constants/apiRoutes';
import { CHATS_QUERY_KEY } from '@/constants/queryKey';
import { STORAGE_KEY_ACCESS_TOKEN } from '@/constants/storageKeys';

const useChatting = (gatheringId: number) => {
  const client = useRef<CompatClient | null>(null);
  const accessToken = localStorage.getItem(STORAGE_KEY_ACCESS_TOKEN);
  const queryClient = useQueryClient();

  const connect = () => {
    const socket = new SockJS(
      `${import.meta.env.VITE_LOGIN_URL}${CHAT_CONNECT_SOCKET_URL}`,
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
          () => {},
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

    client.current.disconnect({
      headers: {
        Authorization: `Bearer ${accessToken}`,
        RoomId: gatheringId,
      },
    });
  };

  const sendMessage = useCallback((content: string) => {
    if (content.length <= 0) {
      return;
    }

    client.current?.publish({
      destination: `${CHAT_SEND_SOCKET_URL}/${gatheringId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        RoomId: String(gatheringId),
      },
      body: JSON.stringify({
        content,
        type: 'CHAT',
      }),
    });

    queryClient.invalidateQueries({
      queryKey: [CHATS_QUERY_KEY, gatheringId],
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

  return { sendMessage };
};

export default useChatting;
