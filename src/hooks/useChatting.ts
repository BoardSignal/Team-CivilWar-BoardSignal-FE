import { useCallback, useEffect, useRef } from 'react';

import { CompatClient, Stomp } from '@stomp/stompjs';
import { useQueryClient } from '@tanstack/react-query';
import SockJS from 'sockjs-client';

import {
  CONNECT_END_POINT,
  SEND_END_POINT,
  SUBSCRIBE_END_POINT,
} from '@/constants/apiRoutes';

const useChatting = (gatheringId: number) => {
  const client = useRef<CompatClient | null>(null);
  const accessToken = localStorage.getItem('accessToken');
  const queryClient = useQueryClient();

  const connect = () => {
    const socket = new SockJS(
      `${import.meta.env.VITE_LOGIN_URL}${CONNECT_END_POINT}`,
    );
    client.current = Stomp.over(socket);

    client.current.connect(
      {
        Authorization: `Bearer ${accessToken}`,
        RoomId: gatheringId,
      },
      () => {
        client.current?.subscribe(
          `${SUBSCRIBE_END_POINT}/${gatheringId}`,
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
      destination: `${SEND_END_POINT}/${gatheringId}`,
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
      queryKey: ['chats', gatheringId],
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
