import express from 'express';
import { authenticateToken } from '../middleware/authenticateToken';
import { getMe, getAllUsers, getUserById } from '../controllers/userController';

const router = express.Router();

router.get('/me', authenticateToken, getMe);
router.get('/all', authenticateToken, getAllUsers);
router.get('/:id', authenticateToken, getUserById);

export default router;
