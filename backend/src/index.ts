import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
a das asdAD
app.listen(PORT, () => {
	consol          e.log(`Server running on port ${PORT}`);
});
