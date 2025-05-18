import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import cookieParser from 'cookie-parser';
import { setupSocket } from './socket/socket';
import express from 'express';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
const server = http.createServer(app);
// WARNING: removed const io = ...
setupSocket(server);
const PORT = process.env.API_PORT || 5000;

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
