import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import cookieParser from 'cookie-parser';
import { Server } from 'socket.io';
import express from 'express';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });
const PORT = process.env.API_PORT || 5000;

io.on('connection', (socket) => {
  console.log(`🟢 User connected with id: ${socket.id}`);
  socket.on('test', (message) => {
    console.log(message);
  });
});

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
