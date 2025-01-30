import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';

const socketUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://chat-call-app-backend-service-422041495987.asia-southeast1.run.app'
    : 'http://localhost:3002';

export const socket = io(socketUrl);
export const WebsocketContext = createContext<Socket>(socket);
export const WebsocketProvider = WebsocketContext.Provider;
