import express from 'express';
import { authenticateToken } from '../middleware/authenticateToken';
import { getMe, getAllUsers } from '../controllers/userController';

const router = express.Router();

router.get('/me', authenticateToken, getMe);
router.get('/all', authenticateToken, getAllUsers);

export default router;
