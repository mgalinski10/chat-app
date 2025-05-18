import { Socket } from 'socket.io';

export const testSocketHandlers = (socket: Socket) => {
  socket.on('test', (data) => {
    console.log('📨 test:', data, 'from:', socket.data.user);
  });
};
