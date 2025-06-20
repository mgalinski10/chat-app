import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import cookieParser from 'cookie-parser';
import { setupSocket } from './socket/socket';
import express from 'express';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import contactsRoutes from './routes/contactsRoutes';
import messagesRoutes from './routes/messagesRoutes';
import notificationsRoutes from './routes/notificationsRoutes';
import connectMongoose from './utils/mongoose-client';
dotenv.config();

const app = express();
const server = http.createServer(app);
export const io = setupSocket(server);
const PORT = process.env.API_PORT || 5000;

connectMongoose();

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
app.use('/contacts', contactsRoutes);
app.use('/messages', messagesRoutes);
app.use('/notifications', notificationsRoutes);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
