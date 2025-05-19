import express from 'express';
import { authenticateToken } from '../middleware/authenticateToken';
import {
  acceptContactRequest,
  declineContactRequest,
  getContacts,
  sendContactRequest,
} from '../controllers/contactsController';

const router = express.Router();

router.post('/request', authenticateToken, sendContactRequest);
router.post('/request/accept', authenticateToken, acceptContactRequest);
router.post('/request/decline', authenticateToken, declineContactRequest);
router.get('/', authenticateToken, getContacts);
router.delete('/:friendId', authenticateToken);

// TODO: Do I need these endpoints?
router.get('/requests/sent', authenticateToken);
router.get('/requests/received', authenticateToken);

router.post('/block', authenticateToken);
router.post('/unblock', authenticateToken);
router.get('/blocked', authenticateToken);

export default router;
