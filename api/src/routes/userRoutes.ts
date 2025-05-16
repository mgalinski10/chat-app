import express from 'express';
import { authenticateToken } from '../middleware/authenticateToken';
import { getMe } from '../controllers/userController';

const router = express.Router();

router.get('/me', authenticateToken, getMe);

export default router;
