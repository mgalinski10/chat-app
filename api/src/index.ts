import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
const PORT = process.env.API_PORT || 5000;

app.use(express.json());

app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
