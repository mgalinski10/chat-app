import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

dotenv.config();

const app = express();
const PORT = process.env.API_PORT || 5000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
