import express from 'express';
import { authenticateToken } from '../middleware/authenticateToken';
import {
  createNotification,
  getNotifications,
  readNotification,
} from '../controllers/notificationsController';

const router = express.Router();

router.get('/', authenticateToken, getNotifications);
router.post('/read', authenticateToken, readNotification);
router.post('/', authenticateToken, createNotification);

export default router;
