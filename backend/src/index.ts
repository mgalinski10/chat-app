import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
a
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
