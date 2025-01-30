// import { createContext } from 'react';
// import { io, Socket } from 'socket.io-client';

// export const socket = io('http://localhost:3002');
// export const WebsocketContext = createContext<Socket>(socket);
// export const WebsocketProvider = WebsocketContext.Provider;

import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';

// Replace with your Cloud Run WebSocket URL
export const socket = io(
  'wss://chat-call-app-backend-service-422041495987.asia-southeast1.run.app',
  {
    path: '/socket.io/', // Ensure this matches your backend WebSocket path
    transports: ['websocket'], // Ensure WebSocket transport is used
  }
);

export const WebsocketContext = createContext<Socket>(socket);
export const WebsocketProvider = WebsocketContext.Provider;
