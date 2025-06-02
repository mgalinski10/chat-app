import express from 'express';
import { authenticateToken } from '../middleware/authenticateToken';
import { getMessages, postMessage } from '../controllers/messagesController';

const router = express.Router();

router.post('/', authenticateToken, postMessage);
router.get('/:userId', authenticateToken, getMessages);

export default router;
