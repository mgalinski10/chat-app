import { Server, Socket } from 'socket.io';
// eslint-disable-next-line
export const testSocketHandlers = (socket: Socket, io: Server) => {
  socket.on('test', (data) => {
    console.log('📨 test:', data, 'from:', socket.data.user);
  });
};
