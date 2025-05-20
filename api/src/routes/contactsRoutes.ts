import express from 'express';
import { authenticateToken } from '../middleware/authenticateToken';
import {
  acceptContactRequest,
  declineContactRequest,
  getContacts,
  sendContactRequest,
  getReceivedRequests,
  getSentRequests,
} from '../controllers/contactsController';

const router = express.Router();

router.post('/request', authenticateToken, sendContactRequest);
router.post('/request/accept', authenticateToken, acceptContactRequest);
router.post('/request/decline', authenticateToken, declineContactRequest);
router.get('/', authenticateToken, getContacts);
router.delete('/:friendId', authenticateToken);

router.get('/requests/sent', authenticateToken, getSentRequests);
router.get('/requests/received', authenticateToken, getReceivedRequests);

router.post('/block', authenticateToken);
router.post('/unblock', authenticateToken);
router.get('/blocked', authenticateToken);

export default router;
