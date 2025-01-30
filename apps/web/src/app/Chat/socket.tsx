import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';

export const socket = io('https://chat-call-app-backend-service.a.run.app');
export const WebsocketContext = createContext<Socket>(socket);
export const WebsocketProvider = WebsocketContext.Provider;
