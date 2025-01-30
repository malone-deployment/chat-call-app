import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';

export const socket = io(
  'https://chat-call-app-backend-service-422041495987.asia-southeast1.run.app:3002'
);
export const WebsocketContext = createContext<Socket>(socket);
export const WebsocketProvider = WebsocketContext.Provider;
